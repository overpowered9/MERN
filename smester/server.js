const express = require('express');
const app = express();
app.set("view engine", "ejs");
// Uncomment and ensure express-ejs-layouts is installed if you need it
// const expressLayouts = require('express-ejs-layouts');
// app.use(expressLayouts);

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.render('pages/home', { text12: 'hy' });
});

const userRouter = require('./routes/users');
app.use('/users', userRouter);

const port = 4000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
