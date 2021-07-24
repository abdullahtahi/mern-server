const { request, response } = require('express');
const express = require('express')
 const router=express.Router();
 const {getProduct,getSingleproduct}=require('../../controller/productController/productController')
 //get all product=getproduct
 router.route('/products').get(getProduct)
//  get a single product
 router.route('/product').get(getSingleproduct)
 module.exports=router