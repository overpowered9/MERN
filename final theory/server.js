const express= require('express');
const app=express();
const session = require('express-session');
const {isAdmin}=require('./middleware/adminprivellege');
const {isUser}=require('./middleware/authenticatuser');
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'your secret key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Note: In production, set this to true and use HTTPS
  }));
  app.get('/login',(req,res)=>{
    res.render('login');
  })
app.post('/login', (req, res) => {
    req.session.user = {
        name: req.body.username,
        isAdmin: req.body.isAdmin==='on'
};
if(req.session.user.isAdmin){
    res.redirect('/adminpage');}
else  {
    res.redirect('/userpage')
}

});

app.get('/adminpage',isAdmin,(req,res)=>{
    let username=req.session.user.name;
res.send(username+' is an admin');

})
app.get('/userpage',isUser,(req,res)=>{
    let username=req.session.user.name;
    res.send(username+' is a user');
})
app.listen(4100,()=>{
    console.log('app listening on 4100')
})