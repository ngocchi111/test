const express = require('express');
const router = express.Router();
const list=require('../models/bookModel');

router.post('/',(req,res,next)=>
{
   const title=req.body.title;
   const basePrice=req.body.price;
   const detail=req.body.detail;
   const cover=req.body.cover;
   const books = list.list();
   res.render('books/detail',{title,basePrice,detail,cover,books});
})
module.exports=router;