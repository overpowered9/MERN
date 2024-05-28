const express = require("express");
const router= express.Router();
const productController = require('../controllers/Products_controller');
router.get('/',productController.getShoes);
router.post('/add',productController.saveShoes);
// Routes

module.exports=router;
