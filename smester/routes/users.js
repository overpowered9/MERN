const express = require("express");
const router= express.Router();
router.get('/', (req, res) => {
  
    res.send("user index");
  });
  router.get('/new',(req,res)=>{
    res.send("user new");
  });
 

  router.route('/:id').get((req,res)=>{
    console.log(req.user);
    res.send(req.params.id+req.user.name);
  })
  const users = [{name:'kyle'},{name:'ali'}];

  router.param("id",(req,res,next,id)=>{
    req.user= users[id-1];
    next(); 

  })
  module.exports= router