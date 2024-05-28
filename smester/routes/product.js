const express = require("express");
const router = express.Router();
const productController = require('../controllers/Products_controller');

router.get('/', productController.getShoes);
router.post('/add', productController.saveShoes);
router.get('/products_listings', productController.getProducts_listings);

module.exports = router;
