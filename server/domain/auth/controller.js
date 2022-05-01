const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { TOKEN_SECRET } = require('./validate');
const bd = require('../../config/config');
const Auth = require('./auth');

const register = async (req, res, next) => {
    try {
        const user = await Auth.findOne({ where: { email: req.body.mail } });
        if(user !== null) {
            res.status(220).send({message: 'El mail ya esta registrado.', status: 220});
        }

        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt);

        const newUserJson = {
            name: req.body.name,
            email: req.body.mail,
            password: password,
            business_type_id: req.body.type
        }

        const newUser = await Auth.create(newUserJson);

        res.status(200);
        res.send({message: 'Registro exitoso', userID: newUser.id});
    } catch(err) {
        next(err);
    }
}

const login = async (req, res, next) => {
    try {
        const user = await Auth.findOne({ where: { email: req.body.mail } });
        if(user === null) {
            res.status(220).send({message: 'El inicio de sesión no es válido.', status: 220});
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword) {
            res.status(220).send({message: 'El password no es válido.', status: 220});
        }

        const token = jwt.sign({
            name: user.name,
            mail: user.email,
            rol: user.rol,
            business: user.business_type_id
        }, TOKEN_SECRET)

        res.status(200);
        res.send({message: 'Login exitoso', name: user.name, rol: user.rol, business: user.business_type_id, token});
    } catch(err) {
        next(err);
    }
}

module.exports = {
    register,
    login
};