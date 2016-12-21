const mongoose = require('mongoose');


const postSchema = mongoose.Schema({
  title: {type: String, required: true, unique: true},
  content: {type: String, required: true},
  createdAt: {type: Date, default: Date.now}
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
