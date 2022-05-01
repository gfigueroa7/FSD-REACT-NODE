const bd = require('../../config/config');
const Stores = require('./stores');
const StoresDetail = require('./storesDetail');

const getStores = async (req, res) => {
    const stores = await Stores.findAll({
        order: [
            ['rating', 'DESC'],
        ],
    });
    res.send(stores);
}

const getStoresDetail = async (req, res) => {
    const detail = await StoresDetail.findAll({
        include: [{
            model: Stores,
            attributes: ['title', 'text', 'img'],
        }],
        where: {
            store_id: req.params.id
        }
    });

    if(detail === null) {
        res.status(220).send({message: 'La tienda no tiene detalle.', status: 220});
    }

    res.send(detail);
}

const addStores = async (req, res, next) => {
    try {
        let newStore = req.body;

        if(isEmptyOrNull(newStore.title) || isEmptyOrNull(newStore.text)) {
            res.status(220).send({message: 'El título y el texto son requeridos.', status: 220});
        }

        if(!onlyLetters(newStore.title)) {
            res.status(220).send({message: 'El título solo puede contener letras.', status: 220});
        }

        let newStoreJson = {
            user_id: newStore.user,
            title: newStore.title.charAt(0).toUpperCase() + newStore.title.slice(1),
            text: newStore.text.charAt(0).toUpperCase() + newStore.text.slice(1),
            img: "assets/ejemplo.png",
        };

        await Stores.create(newStoreJson);

        res.status(200);
        res.send({message: `Se ha agregado la tienda ${newStoreJson.title} con éxito`});
    } catch(err) {
        next(err);
    }
    
}

const updateStores = async (req, res, next) => {
    try {
        const store = await Stores.findOne({ where: { title: req.body.title } });

        if(store === null) {
            res.status(220).send({message: 'La tienda no es válida.', status: 220});
        }

        await Stores.update({ rating: req.body.rating, people: req.body.people, total: req.body.total  }, {
            where: {
            id: store.id
            }
        });

        res.status(200);
        res.send({message: `Se ha actualizado la tienda ${store.title} con éxito`});
    } catch(err) {
        next(err);
    }
}

const isEmptyOrNull = (name) => name === "" || name === undefined;

const onlyLetters = (name) => name.match(/^[a-zA-Z\s]+$/);

module.exports = {
    getStores,
    getStoresDetail,
    addStores,
    updateStores
}