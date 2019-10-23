const express = require('express');
const app = express.Router();

app.get('/',(req,res)=>{
    var data = {
        name:'Nova Al Farisia',
        job:'Web Developer',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet rerum dolor, maxime beatae, sed delectus magnam non consequuntur iusto ab similique, alias velit quam corporis commodi! Temporibus magnam quam quaerat!',
        contacts: {
            whatsapp:'08976222322',
            facebook:'nova.alfarisi9'
        }
    }
    res.render('card', data);
})

module.exports = app;