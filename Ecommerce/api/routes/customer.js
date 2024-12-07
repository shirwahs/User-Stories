const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
 
// parse application/json
app.use(bodyParser.json());
 
//create database connection
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

router.get('/:id', (req,res, next) =>{
    let sql = "Select * FROM customers WHERE id="+req.params.id+"";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({results}));
    });  
})

router.get('/', (req,res, next) =>{
    let sql = "Select * FROM customers";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({results}));
    });  
})


router.post('/', (req,res, next) =>{
    let data = {        first_name: req.body.first_name,
      last_name: req.body.last_name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        birthdate: req.body.birthdate,
        gender: req.body.gender,
        password: req.body.password,        
};
    let sql = "INSERT INTO customers SET ?";
    let query = conn.query(sql, data,(err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({results}));
    });
  
})

router.put('/', (req,res, next) =>{
  console.log(req.body)
    let sql = "UPDATE customers SET first_name='"+req.body.first_name+"',last_name='"+req.body.last_name+"',email='"+req.body.email+"',phone_number='"+req.body.phone_number+"',birthdate='"+req.body.birthdate+"', gender='"+req.body.gender+"', password='"+req.body.password+"' WHERE id="+req.body.id;
    console.log(sql)
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({results}));
    });
  })

router.delete('/:id', (req,res, next) =>{
    let sql = "DELETE FROM customers WHERE id="+req.params.id+"";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({results}));
    });  
})

module.exports = router;
