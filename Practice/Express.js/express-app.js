const express = require("express");
let server= express();

// Set view engine
server.set("view engine", "ejs");

// Serve static files from "public" directory
server.use(express.static("public"));

server.get("/api/stories",function(req,res){
    console.log('ok');
    res.send([
        {title:"Story 1",Content:"story 1 content"},
        {title:"Story 2",Content:"story 2 content"}
    ])
    });
    server.get("/homepage",function(req,res){
        res.render("homepage")
        });
server.get("/",function(req,res){
res.send("Hello A Section")
});

server.listen(4000);  