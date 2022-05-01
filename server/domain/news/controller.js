const bd = require('../../config/config');
const News = require('./news');

const getNews = async (req, res) => {
    const news = await News.findAll({
        order: [
            ['date', 'DESC'],
        ],
        limit: 3
    });
    res.send(news);
}

const addNews = async (req, res, next) => {
    try {
        let newNews = req.body;

        if(isEmptyOrNull(newNews.title) || isEmptyOrNull(newNews.text)) {
            res.status(220).send({message: 'El título y el texto son requeridos.', status: 220});
        }

        let newNewsJson = {
            title: newNews.title.charAt(0).toUpperCase() + newNews.title.slice(1),
            text: newNews.text.charAt(0).toUpperCase() + newNews.text.slice(1),
        };

        await News.create(newNewsJson);

        res.status(200);
        res.send({message: `Se ha agregado la noticia ${newNewsJson.title} con éxito`});
    } catch(err) {
        next(err);
    }
    
}

const isEmptyOrNull = (name) => name === "" || name === undefined;

module.exports = {
    getNews,
    addNews
}