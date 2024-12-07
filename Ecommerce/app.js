const express= require('express');
const app= express();
var cors = require('cors');


const productRoutes= require('./api/routes/product');
const customerRoutes= require('./api/routes/customer');
const commentRoutes= require('./api/routes/comment');
const authRoutes= require('./api/routes/auth');

app.use(cors());
app.use(express.json());

app.use('/products', productRoutes); 
app.use('/customers', customerRoutes);
app.use('/comments', commentRoutes);
app.use('/auth', authRoutes);
app.use((req,res,next)=>{ 
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','PUT, POST, PTACH, DELETE, PUT, OPTIONS');
    next();
});

app.use((req,res,next)=>{
    const error = new Error('Not Found')
    error.status=404;
    next(error);
}); 

app.use((error, req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
}); 

module.exports = app;