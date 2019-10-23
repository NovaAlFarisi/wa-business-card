const express = require('express');
const app = express.Router();

app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/login', (req,res)=>{
    res.send('login page');
});

app.get('/register', (req,res)=>{
    res.send('register page');
});
module.exports = app;