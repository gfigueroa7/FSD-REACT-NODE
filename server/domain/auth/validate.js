const jwt = require('jsonwebtoken');

const TOKEN_SECRET = 'UnaClaveChingonaParaValidarElToken';

const verifyToken = (req, res, next) => {
    const token = req.header('auth-token');

    if(!token) {
        res.status(220).send({message: 'Token no válido.', status: 220});
    }
    
    try {
        const verified = jwt.verify(token, TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(550).json({err: 'El token enviado no se pudo verificar'})
    }
}

module.exports = {
    verifyToken,
    TOKEN_SECRET
};