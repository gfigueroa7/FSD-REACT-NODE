const express = require('express');
const router = express.Router();
const trainersController = require('./controller');

router.get('/', trainersController.getTrainers);

router.get('/detail/:id', trainersController.getTrainersDetail);

router.post('/', trainersController.addTrainers);

router.put('/:id',trainersController.updateTrainers);

module.exports = router;