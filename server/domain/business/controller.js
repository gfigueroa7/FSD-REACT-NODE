const bd = require('../../config/config');
const Auth = require('../auth/auth');
const Veterinary = require('../veterinary/veterinary');
const Stores = require('../stores/stores');
const Trainers = require('../trainers/trainers');

const getBusiness = async (req, res) => {
    const user = await Auth.findOne({ where: { email: req.user.mail } });
    if(user === null) {
        res.status(220).send({message: 'El usuario no es válido.', status: 220});
    }

    var business;
    if(req.user.business == 1) {
        business = await Veterinary.findOne({ where: { user_id: user.id } });
    } else if(req.user.business == 2) {
        business = await Stores.findOne({ where: { user_id: user.id } });
    } else {
        business = await Trainers.findOne({ where: { user_id: user.id } });
    }
    
    res.send(business);
}

const updateBusiness = async (req, res, next) => {
    try {
        const user = await Auth.findOne({ where: { email: req.user.mail } });
        if(user === null) {
            res.status(220).send({message: 'El usuario no es válido.', status: 220});
        }

        if(req.user.business == 1) {
            await Veterinary.update({ title: req.body.title, text: req.body.text  }, {
                where: {
                id: req.body.id
                }
            });
        } else if(req.user.business == 2) {
            await Stores.update({ title: req.body.title, text: req.body.text  }, {
                where: {
                id: req.body.id
                }
            });
        } else {
            await Trainers.update({ title: req.body.title, text: req.body.text  }, {
                where: {
                id: req.body.id
                }
            });
        }

        res.status(200);
        res.send({message: `Se ha actualizado el negocio con éxito`});
    } catch(err) {
        next(err);
    }
}

module.exports = {
    getBusiness,
    updateBusiness
}