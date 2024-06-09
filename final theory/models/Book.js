const mongoose = require('mongoose');
const bookschema=new mongoose.Schema({Booktitle:String,Author:String,Price:Number});
const Book= mongoose.model('Book',bookschema);
module.exports=Book;