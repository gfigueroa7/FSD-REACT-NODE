const bd = require('../../config/config');
const Trainers = require('./trainers');
const TrainersDetail = require('./trainersDetail');

const getTrainers = async (req, res) => {
    const trainers = await Trainers.findAll({
        order: [
            ['rating', 'DESC'],
        ],
    });
    res.send(trainers);
}

const getTrainersDetail = async (req, res) => {
    const detail = await TrainersDetail.findAll({
        include: [{
            model: Trainers,
            attributes: ['title', 'text', 'img'],
        }],
        where: {
            trainer_id: req.params.id
        }
    });

    if(detail === null) {
        res.status(220).send({message: 'El entrenador no tiene detalle.', status: 220});
    }

    res.send(detail);
}

const addTrainers = async (req, res, next) => {
    try {
        let newTrainer = req.body;

        if(isEmptyOrNull(newTrainer.title) || isEmptyOrNull(newTrainer.text)) {
            res.status(220).send({message: 'El título y el texto son requeridos.', status: 220});
        }

        if(!onlyLetters(newTrainer.title)) {
            res.status(220).send({message: 'El título solo puede contener letras.', status: 220});
        }

        let newTrainerJson = {
            user_id: newTrainer.user,
            title: newTrainer.title.charAt(0).toUpperCase() + newTrainer.title.slice(1),
            text: newTrainer.text.charAt(0).toUpperCase() + newTrainer.text.slice(1),
            img: "assets/ejemplo.png",
        };

        await Trainers.create(newTrainerJson);

        res.status(200);
        res.send({message: `Se ha agregado el entrenador ${newTrainerJson.title} con éxito`});
    } catch(err) {
        next(err);
    }
    
}

const updateTrainers = async (req, res, next) => {
    try {
        const trainer = await Trainers.findOne({ where: { title: req.body.title } });

        if(trainer === null) {
            res.status(220).send({message: 'El entrenador no es válida.', status: 220});
        }

        await Trainers.update({ rating: req.body.rating, people: req.body.people, total: req.body.total  }, {
            where: {
            id: trainer.id
            }
        });

        res.status(200);
        res.send({message: `Se ha actualizado el entrenador ${trainer.title} con éxito`});
    } catch(err) {
        next(err);
    }
}

const isEmptyOrNull = (name) => name === "" || name === undefined;

const onlyLetters = (name) => name.match(/^[a-zA-Z\s]+$/);

module.exports = {
    getTrainers,
    getTrainersDetail,
    addTrainers,
    updateTrainers
}