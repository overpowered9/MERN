const mongoose= require("mongoose");
let storyschema=mongoose.Schema({
    title:String,
    story:String
});
let Story=mongoose.model('Story',storyschema);
module.exports=Story;