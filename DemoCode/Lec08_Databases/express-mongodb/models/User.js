const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const refType = Schema.Types.ObjectId;

// Use Schemas instead of Tables!

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  todos: [
    {
      type: refType,
      ref: "Todo",
    },
  ], // An array of 'ObjectId' references to 'Todo' documents
  // ObjectId: MongoDB Document ID
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
