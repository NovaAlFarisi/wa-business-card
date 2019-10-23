const express = require('express');
const app = express();
const PORT = 3000;

//ejs
app.set('view engine','ejs');

//json parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//static path
app.use(express.static(__dirname + '/public'));

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