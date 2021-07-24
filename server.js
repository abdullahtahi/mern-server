const express = require('express')
const app = express();
const product=require('../Backend/routes/product/product');//origonally path of the file (Routing)
app.use('/api',product)//globally middle ware.it take two parameter and middle ware used to inject the path in the url.it redirect to the routing file (product.js)
const PORT=6000
app.listen(PORT,()=>console.log("this is running on the abdullah laptops 1024 port "+PORT))