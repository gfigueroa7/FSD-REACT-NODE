const bd = require('../../config/config');
const Blog = require('./blog');
const Auth = require('../auth/auth');

const getBlog = async (req, res) => {
    const blog = await Blog.findAll({
        attributes: ['title', 'text', 'date'],
        include: [{
            model: Auth,
            attributes: ['name'],
        }],
        where: {
            view: true
        },
        order: [
            ['date', 'DESC'],
        ]
    });
    res.send(blog);
}

const addBlog = async (req, res, next) => {
    try {
        let newBlog = req.body;

        if(isEmptyOrNull(newBlog.title) || isEmptyOrNull(newBlog.text)) {
            res.status(220).send({message: 'El título y el texto son requeridos.', status: 220});
        }

        const user = await Auth.findOne({ where: { email: req.user.mail } });
        if(user === null) {
            res.status(220).send({message: 'El usuario no es válido.', status: 220});
        }

        let newBlogJson = {
            user_id: user.id,
            title: newBlog.title.charAt(0).toUpperCase() + newBlog.title.slice(1),
            text: newBlog.text.charAt(0).toUpperCase() + newBlog.text.slice(1),
        };

        await Blog.create(newBlogJson);

        res.status(200);
        res.send({message: `Se ha agregado el blog ${newBlogJson.title} con éxito. Será revisado para aprobación.`});
    } catch(err) {
        next(err);
    }
}

const isEmptyOrNull = (name) => name === "" || name === undefined;

module.exports = {
    getBlog,
    addBlog
}