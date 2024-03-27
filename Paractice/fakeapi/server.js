const express= require ("express");
const mongoose=require("mongoose");
let server=express();
server.listen(4000,()=>{
    console.log("server listening 4000");
});
server.get("/api/students",function(req,res){
let student=[{name:"Hassan", Address:"kusoor"},{name:"Ali", Address:"SKP"}]
    res.send(student);
})