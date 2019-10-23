const db = require('../db/connection');
const response = require('./helper/response');

exports.get = (req,res) => {
    db.query("SELECT * FROM tb_users", (err, rows)=>{
        response.ok(rows, res);
    });
}