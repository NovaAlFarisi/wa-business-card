const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const PORT = 3000;

//ejs
app.set('view engine','ejs');

//routes
app.use('/', require('./routes/mainRoutes'));
app.use('/user/', require('./routes/userRoutes'));
app.use('/card/', require('./routes/cardRoutes'));

app.listen(PORT, (err)=>{
    if(err){
        console.log(err);
    }
    console.log(`server started ${PORT}`);
});