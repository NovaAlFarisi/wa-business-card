const express = require('express');
const app = express();

const PORT = 3000;

app.use('/user/', require('./routes/userRoutes'));

app.listen(PORT, (err)=>{
    if(err){
        console.log(err);
    }
    console.log(`server started ${PORT}`);
});