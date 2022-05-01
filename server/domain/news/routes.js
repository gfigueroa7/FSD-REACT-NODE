const express = require('express');
const router = express.Router();
const newsController = require('./controller');

router.get('/', newsController.getNews);

router.post('/', newsController.addNews);

module.exports = router;