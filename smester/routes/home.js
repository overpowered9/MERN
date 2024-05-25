const express = require("express");
const router= express.Router();
router.get('/', (req, res) => {
    res.render('pages/home', { text12: 'hy' });
});

module.exports= router