const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const refType = Schema.Types.ObjectId;

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  likes: [
    {
      type: refType, // Array of ObjectID's
      ref: "Song",
    },
  ],
  follows: [
    {
      type: refType,
      ref: "Artist",
    },
  ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
