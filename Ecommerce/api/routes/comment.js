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

  //get by id 

router.get('/:id', (req,res, next) =>{
    let sql = "Select * FROM comments WHERE id="+req.params.id+"";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({results}));
    });  
})

//get comments of a product
router.get('/product-comments/:productId', (req,res, next) =>{
    let sql = "Select * FROM comments WHERE product_id="+req.params.productId+"";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({results}));
    });  
})

//get comments of a product with customer name
router.get('/product-comments-with-name/:productId', (req,res, next) =>{
  let sql = "Select u.first_name,u.last_name,c.* FROM comments c join customers u on c.customer_id=u.id WHERE product_id="+req.params.productId+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    console.log(JSON.stringify({results}))

    res.send(JSON.stringify({results}));
  });  
})

  //get all  
router.get('/', (req,res, next) =>{
    let sql = "Select * FROM comments";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({results}));
    });  
})


//add comment
router.post('/', (req,res, next) =>{
  let data = {description: req.body.description, product_id: req.body.product_id, customer_id: req.body.customer_id, reply: req.body.reply};
  let sql = "INSERT INTO comments SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({results}));
  });

})

//edit comment
router.put('/', (req,res, next) =>{
  console.log(req.body)
    let sql = "UPDATE comments SET description='"+req.body.description+"', product_id='"+req.body.product_id+"', customer_id='"+req.body.customer_id+"', reply='"+req.body.reply+"' WHERE id="+req.body.id;
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({results}));
    });
  })

//delete comment
router.delete('/:id', (req,res, next) =>{
    let sql = "DELETE FROM comments WHERE id="+req.params.id+"";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({results}));
    });  
})

module.exports = router;