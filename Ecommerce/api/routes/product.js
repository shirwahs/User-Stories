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

  //select by product id
router.get('/:id', (req,res, next) =>{
    let sql = "Select * FROM products WHERE id="+req.params.id+"";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({results}));
    });  
})

  //select by all product

router.get('/', (req,res, next) =>{
    let sql = "Select * FROM products";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({results}));
    });  
})


  //add product

router.post('/', (req,res, next) =>{
    let data = {name: req.body.name, price: req.body.price, description: req.body.description, image_url: req.body.image_url};
    let sql = "INSERT INTO products SET ?";
    let query = conn.query(sql, data,(err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({results}));
    });
})

//edit product
router.put('/', (req,res, next) =>{
    let sql = "UPDATE products SET name='"+req.body.name+"', price='"+req.body.price+"', description='"+req.body.description+"', image_url='"+req.body.image_url+"' WHERE id="+req.body.id;
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({results}));
    });
  })

  //delete product
router.delete('/:id', (req,res, next) =>{
    let sql = "DELETE FROM products WHERE id="+parseInt(req.params.id);
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({results}));
    });  
})

module.exports = router;


