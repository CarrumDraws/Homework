const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  body: String,
  postDate: Date,
  upvotes: Number,
  downvotes: Number,
});

const Post = mongoose.model("Post", PostSchema, "Post");

module.exports = Post;
