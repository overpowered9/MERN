const express= require("express");
const calorie_app=express();
calorie_app.use("json");

function calculate_calorie(weight,height){
    return (100-height+weight);
}
calorie_app.listen(4000,()=>console.log(`it's alive on`));

calorie_app.get("/getcalorie",function(reques,recieve){
    recieve.send("hy");
});
calorie_app.post("/post_calorie",(req,res)=>{
const {id}=req.params;
const {logo}=req.body;
logo?res.send({tshirt:`"with your logo ${logo} and id : ${id}"`}):res.status(418).send({message:'try logo'})
})
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