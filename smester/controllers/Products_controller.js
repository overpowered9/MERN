const Product = require('../models/Product');

const getShoes = async (req, res) => {
    const products = await Product.find();
    res.render('pages/addproduct', { products });
};

const getProducts_listings = async (req, res) => {
    const { size, priceMin, priceMax, sort } = req.query;

    let filter = {};
    let sortOption = {};

    if (size) {
        filter.sizes = { $elemMatch: { size: Number(size) } };
    }

    if (priceMin || priceMax) {
        filter.price = {};
        if (priceMin) {
            filter.price.$gte = Number(priceMin);
        }
        if (priceMax) {
            filter.price.$lte = Number(priceMax);
        }
    }

    if (sort) {
        sortOption.price = sort === 'asc' ? 1 : -1;
    }

    const products = await Product.find(filter).sort(sortOption);
    res.render('pages/product_listings', { products });
};

const saveShoes = async (req, res) => {
    const { articleNumber, name, category, price, description, sizes } = req.body;
    let imageUrls = req.body.imageUrls;

    const existingProduct = await Product.findOne({ articleNumber });

    if (existingProduct) {
        res.status(400).send('A product with this articleNumber already exists');
    } else {
        const sizesArray = sizes.split(',').map(sizeQty => {
            const [size, quantity] = sizeQty.split(':').map(Number);
            return { size, quantity };
        });

        if (!Array.isArray(imageUrls)) {
            imageUrls = [imageUrls];
        }

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
    saveShoes,
    getProducts_listings
};
