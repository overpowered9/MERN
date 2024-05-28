const Product = require('../models/Product');

// Controller function to get all shoes
const getShoes = async (req, res) => {
    const products = await Product.find();
    res.render('pages/addproduct', { products });
};

// Controller function to save a new shoe
const saveShoes = async (req, res) => {
    const { articleNumber, name, category, price, description, sizes } = req.body;
    let imageUrls = req.body.imageUrls;

    // Check if a product with the same articleNumber already exists
    const existingProduct = await Product.findOne({ articleNumber });

    if (existingProduct) {
        // Handle the error: a product with this articleNumber already exists
        res.status(400).send('A product with this articleNumber already exists');
    } else {
        // Parse sizes input to create an array of size-quantity objects
        const sizesArray = sizes.split(',').map(sizeQty => {
            const [size, quantity] = sizeQty.split(':').map(Number);
            return { size, quantity };
        });

        // Ensure imageUrls is an array
        if (!Array.isArray(imageUrls)) {
            imageUrls = [imageUrls];
        }

        // Create and save the new product
        const product = new Product({
            articleNumber,
            name,
            category,
            price,
            description,
            sizes: sizesArray,
            imageUrls
        });

        await product.save();
        res.redirect('/products');
    }
};

module.exports = {
    getShoes,
    saveShoes
};
