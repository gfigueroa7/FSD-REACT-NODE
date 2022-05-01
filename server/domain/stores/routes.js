const express = require('express');
const router = express.Router();
const storesController = require('./controller');

router.get('/', storesController.getStores);

router.get('/detail/:id', storesController.getStoresDetail);

router.post('/', storesController.addStores);

router.put('/:id',storesController.updateStores);

module.exports = router;