const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'wa_card'
});

connection.connect((err)=>{
    if(err){
        throw err;
    }
});

module.exports = connection;