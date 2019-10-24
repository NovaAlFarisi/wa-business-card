const db = require('../db/connection');
const response = require('./helper/response');

exports.get = (req,res) => {
    db.query("SELECT * FROM tb_users", (err, rows)=>{
        response.ok(rows, res);
    });
}
exports.userAuth = (req,res) => {
    var email = req.body.email;
    var password = req.body.password;
    console.log(req);   
    db.query("SELECT * FROM tb_users WHERE email = ? AND password = ?", [email, password],(err,rows)=>{
       if(rows.length > 0 ){
           response.ok(rows, res);
       } else {
           response.fail('Your account isn`t valid!', res);
       }
    });
}
exports.register = (req,res) => {
    var data = [req.body.email, req.body.password, 'TRUE'];
    console.log(data);
    db.query("INSERT INTO tb_users (email, password, verified) VALUES (?)",[data], (err, rows)=>{
        if(err){
            response.fail('Bad request!', res);
        }
        response.ok(rows, res);
    });
}