const Product = require('../models/Product');

// Controller function to get all shoes
const getShoes = async (req, res) => {
    const products = await Product.find();
    res.render('pages/addproduct', { products });
};

// Controller function to get all shoes with filters and sorting
const getProducts_listings = async (req, res) => {
    const { size, priceMin, priceMax, sort } = req.query;

    let filter = {};
    let sortOption = {};

    // Add size filter
    if (size) {
        filter.sizes = { $elemMatch: { size: Number(size) } };
    }

    // Add price filters
    if (priceMin || priceMax) {
        filter.price = {};
        if (priceMin) {
            filter.price.$gte = Number(priceMin);
        }
        if (priceMax) {
            filter.price.$lte = Number(priceMax);
        }
    }

    // Add sorting option
    if (sort) {
        sortOption.price = sort === 'asc' ? 1 : -1;
    }

    const products = await Product.find(filter).sort(sortOption);
    res.render('pages/product_listings', { products });
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

// Controller function to search products by article number or name
const searchProducts = async (req, res) => {
    const { query } = req.query;

    const searchQuery = {
        $or: [
            { articleNumber: query },
            { name: { $regex: query, $options: 'i' } } // Case-insensitive search
        ]
    };

    const products = await Product.find(searchQuery);
    res.render('pages/product_listings', { products });
};

// Controller function to delete a product by ID
const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        await Product.findByIdAndDelete(id);
        res.redirect('/products');
    } catch (error) {
        res.status(500).send('Error deleting product');
    }
};

module.exports = {
    getShoes,
    saveShoes,
    getProducts_listings,
    searchProducts,
    deleteProduct
};
