require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const sequelize = require('./config/config');
const execute = require('./config/initialize');

const authRoutes = require('./domain/auth/routes');
const veterinaryRoutes = require('./domain/veterinary/routes');
const trainersRoutes = require('./domain/trainers/routes');
const storesRoutes = require('./domain/stores/routes');
const newsRoutes = require('./domain/news/routes');
const blogRoutes = require('./domain/blog/routes');
const businessRoutes = require('./domain/business/routes');
const backendRoutes = require('./domain/backend/routes');

var app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
    res.send("Welcome to the server");
})

app.use('/auth', authRoutes);
app.use('/veterinary', veterinaryRoutes);
app.use('/trainers', trainersRoutes);
app.use('/stores', storesRoutes);
app.use('/news', newsRoutes);
app.use('/blog', blogRoutes);
app.use('/business', businessRoutes);
app.use('/backend', backendRoutes);

app.get('/*', (req, res) => {
    res.send("Endpoint aún no disponible");
})

app.use((err, req, res, next) => {
    res.status(550).send({message:err.message, status:550});
})

app.listen(4000, async() => {
    await sequelize.sync({force: true});
    execute();
});