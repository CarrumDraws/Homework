const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const refType = Schema.Types.ObjectId;

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  posts: [{ type: refType, ref: "Post" }],
});

const User = mongoose.model("User", UserSchema, "User");

module.exports = User;
