const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/users/:id', UserController.getUser);

module.exports = router;
