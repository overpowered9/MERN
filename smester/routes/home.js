const express = require("express");
const Product = require('../models/Product');

const router= express.Router();
router.get('/', async (req, res) => {
     // Assuming products is your array of product objects

     const products = await Product.find();
     const limitedProducts = products.length>=4?products.slice(0, 4):products.slice(0,products.length); // Get only the first 4 products

    res.render('pages/home', {products: limitedProducts});
});

module.exports= router