const express = require('express');
const app = express.Router();
const userController = require('../controllers/userController');

app.route('/')
    .get(userController.get)
    .post(userController.get);
   
module.exports = app;