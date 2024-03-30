const mongoose = require("mongoose");

const storySchema = mongoose.Schema({
    title: String,
    story: String
});

const Story = mongoose.model('Story', storySchema);

module.exports = Story;
