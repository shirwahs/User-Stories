const express = require('express');
const router = express.Router();
var mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'ecommerce'
});
//connect to database
conn.connect((err) =>{
    if(err) throw err;
    console.log('Mysql Connected...');
  });

//Login
router.post('/login', (req,res, next) =>{
    let sql = "Select * FROM ecommerceadmin WHERE email='"+req.body.email+"' AND password='"+req.body.password+"'";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({results}));
    });
  
})

module.exports = router;