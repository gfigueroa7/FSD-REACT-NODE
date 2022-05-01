const bd = require('../../config/config');
const Auth = require('../auth/auth');
const Blog = require('../blog/blog');
const News = require('../news/news');

const getBackend = async (req, res) => {
    const user = await Auth.findOne({ where: { email: req.user.mail } });
    if(user === null) {
        res.status(220).send({message: 'El usuario no es válido.', status: 220});
    }

    let arr = [];

    const blog = await Blog.findAll();

    const news = await News.findAll();

    arr.push({'blog':blog},{'news':news});
    
    res.send(arr);
}

const showHideBlog = async (req, res, next) => {
    try {
        const user = await Auth.findOne({ where: { email: req.user.mail } });
        if(user === null) {
            res.status(220).send({message: 'El usuario no es válido.', status: 220});
        }

        var bool = true;
        if(req.body.view) {
            bool = false;
        }

        await Blog.update({ view: bool  }, {
            where: {
                id: req.body.id
            }
        });

        res.status(200);
        res.send({message: `Se ha actualizado el blog con éxito`});
    } catch(err) {
        next(err);
    }
}

const editNews = async (req, res, next) => {
    try {
        const user = await Auth.findOne({ where: { email: req.user.mail } });
        if(user === null) {
            res.status(220).send({message: 'El usuario no es válido.', status: 220});
        }

        var bool = true;
        if(req.body.view) {
            bool = false;
        }

        await News.update({ title: req.body.title, text: req.body.text  }, {
            where: {
                id: req.body.id
            }
        });

        res.status(200);
        res.send({message: `Se ha actualizado la notica con éxito`});
    } catch(err) {
        next(err);
    }
}

const deleteNews = async (req, res, next) => {
    try {
        const user = await Auth.findOne({ where: { email: req.user.mail } });
        if(user === null) {
            res.status(220).send({message: 'El usuario no es válido.', status: 220});
        }

        await News.destroy({
            where: {
                id: req.body.id
            }
        });

        res.status(200);
        res.send({message: `Se ha borrado la noticia con éxito`});
    } catch(err) {
        next(err);
    }
}

module.exports = {
    getBackend,
    showHideBlog,
    editNews,
    deleteNews
}