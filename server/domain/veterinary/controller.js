const bd = require('../../config/config');
const Veterinary = require('./veterinary');
const VeterinaryDetail = require('./veterinaryDetail');

const getVeterinary = async (req, res) => {
    const veterinary = await Veterinary.findAll({
        order: [
            ['rating', 'DESC'],
        ],
    });
    res.send(veterinary);
}

const getVeterinaryDetail = async (req, res) => {
    const detail = await VeterinaryDetail.findAll({
        include: [{
            model: Veterinary,
            attributes: ['title', 'text', 'img'],
        }],
        where: {
            veterinary_id: req.params.id
        }
    });

    if(detail === null) {
        res.status(220).send({message: 'La veterinaria no tiene detalle.', status: 220});
    }

    res.send(detail);
}

const addVeterinary = async (req, res, next) => {
    try {
        let newVeterinary = req.body;

        if(isEmptyOrNull(newVeterinary.title) || isEmptyOrNull(newVeterinary.text)) {
            res.status(220).send({message: 'El título y el texto son requeridos.', status: 220});
        }

        if(!onlyLetters(newVeterinary.title)) {
            res.status(220).send({message: 'El título solo puede contener letras.', status: 220});
        }

        let newVeterinaryJson = {
            user_id: newVeterinary.user,
            title: newVeterinary.title.charAt(0).toUpperCase() + newVeterinary.title.slice(1),
            text: newVeterinary.text.charAt(0).toUpperCase() + newVeterinary.text.slice(1),
            img: "assets/ejemplo.png",
        };

        await Veterinary.create(newVeterinaryJson);

        res.status(200);
        res.send({message: `Se ha agregado la veterinaria ${newVeterinaryJson.title} con éxito`});
    } catch(err) {
        next(err);
    }   
}

const updateVeterinary = async (req, res, next) => {
    try{
        const veterinary = await Veterinary.findOne({ where: { title: req.body.title } });

        if(veterinary === null) {
            res.status(220).send({message: 'La veterinaria no es válida.', status: 220});
        }

        await Veterinary.update({ rating: req.body.rating, people: req.body.people, total: req.body.total  }, {
            where: {
            id: veterinary.id
            }
        });

        res.status(200);
        res.send({message: `Se ha actualizado la veterinaria ${veterinary.title} con éxito`});
    } catch(err) {
        next(err);
    }
}

const isEmptyOrNull = (name) => name === "" || name === undefined;

const onlyLetters = (name) => name.match(/^[a-zA-Z\s]+$/);

module.exports = {
    getVeterinary,
    getVeterinaryDetail,
    addVeterinary,
    updateVeterinary
}