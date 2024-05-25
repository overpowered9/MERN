const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(expressLayouts);

app.use(express.static('./public'));

// app.get('/', (req, res) => {
//   res.render('pages/home', { text12: 'hy' });
// });

const userRouter = require('./routes/users');
const homeRouter = require('./routes/home');
const productRouter = require('./routes/product');
app.use('/users', userRouter);
app.use('/', homeRouter);

const port = 4000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
