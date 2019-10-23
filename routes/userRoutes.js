const express = require('express');
const app = express.Router();
const userController = require('../controllers/userController');

app.route('/')
    .get(userController.get)
    .post(userController.get);

app.post('/auth', (req,res)=>{
    res.json({
        email:req.body.email,
        password:req.body.password
    });
});
module.exports = app;