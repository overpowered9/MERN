const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.use(express.static('./public/'));
const port = 3000;

app.set("view engine","ejs");

app.get('/', (req, res) => {
  res.render('partials/menu');
});
app.get('/home', (req, res) => {
  res.render('homepage');
});
app.get('/contact', (req, res) => {
  res.render('contact_us');
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});