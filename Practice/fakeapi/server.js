const express = require("express");
const mongoose = require("mongoose");
const Story = require('./models/story'); // Ensure correct path to the Story model

let server = express();
server.use(express.json());

server.listen(4000, () => {
    console.log("server listening 4000");
});

server.post('/api/story', async function(req, res) {
    let data = req.body;
    let story1 = new Story(data);
    await story1.save();
    res.send(story1); // Send the entire story object back as the response
});

mongoose.connect('mongodb+srv://zaidvirk50:1CG6tTJ9O2vdjV2x@cluster0.5ahbm.mongodb.net/story')
    .then(() => {
        console.log("db is connected")
    })
    .catch((err) => {
        console.log(`error:${err}`)
    });
