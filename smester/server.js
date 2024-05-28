const express = require('express');
  const app = express();
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(express.static('./public'));

app.set("view engine", "ejs");

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/shoeStore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Connection error', err);
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);

const userRouter = require('./routes/users');
const homeRouter = require('./routes/home');
const productRouter = require('./routes/product');
app.use('/users', userRouter);
app.use('/', homeRouter);
app.use('/products',productRouter)





const port = 4000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
