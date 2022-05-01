const express = require('express');
const router = express.Router();
const businessController = require('./controller');
const { verifyToken } = require('../auth/validate');

router.get('/', verifyToken, businessController.getBusiness);

router.put('/', verifyToken, businessController.updateBusiness);

module.exports = router;