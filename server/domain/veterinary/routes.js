const express = require('express');
const router = express.Router();
const veterinaryController = require('./controller');

router.get('/', veterinaryController.getVeterinary);

router.get('/detail/:id', veterinaryController.getVeterinaryDetail);

router.post('/', veterinaryController.addVeterinary);

router.put('/:id',veterinaryController.updateVeterinary);

module.exports = router;