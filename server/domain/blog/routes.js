const express = require('express');
const router = express.Router();
const blogController = require('./controller');
const { verifyToken } = require('../auth/validate');

router.get('/', blogController.getBlog);

router.post('/', verifyToken, blogController.addBlog);

module.exports = router;