const express = require('express');
const router = express.Router();
const backendController = require('./controller');
const { verifyToken } = require('../auth/validate');

router.get('/', verifyToken, backendController.getBackend);

router.put('/showhideblog', verifyToken, backendController.showHideBlog);

router.put('/editnews', verifyToken, backendController.editNews);

router.put('/deletenews', verifyToken, backendController.deleteNews);

module.exports = router;