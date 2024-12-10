const express = require('express')
const Product = require('../model/product.model.js')
const router = express.Router()
const{getproducts, getproduct , creatproduct ,updateproduct, deleteproduct } = require('../controllers/product.controller.js')


router.get('/' , getproducts);
router.get('/:id' , getproduct);
router.post('/' , creatproduct);
router.put('/id' , updateproduct);
router.delete('/id' , deleteproduct);

module.exports= router ;