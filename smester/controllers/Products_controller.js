const Product = require('../models/Product');

//get and save functions
const getShoes= async (req, res) => {
    const products = await Product.find();
    res.render('pages/addproduct', { products });
  };
  
  const saveShoes = async (req, res) => {
    const { articleNumber, name, category, price, quantity, description, sizes, imageUrl } = req.body;
    
    // Check if a product with the same articleNumber already exists
    const existingProduct = await Product.findOne({ articleNumber });
  
    if (existingProduct) {
      // Handle the error: a product with this articleNumber already exists
      res.status(400).send('A product with this articleNumber already exists');
    } else {
      // Insert the new product
      const product = new Product({ articleNumber, name, category, price, quantity, description, sizes: sizes.split(',').map(Number), imageUrl });
      await product.save();
      res.redirect('/addproduct');
    }
  }

module.exports = {
    getShoes,
    saveShoes
  };