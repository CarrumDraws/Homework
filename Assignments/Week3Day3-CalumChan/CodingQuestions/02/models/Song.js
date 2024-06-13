const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SongSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  genre: { type: String, required: true },
  language: { type: String, required: true },
});

const Song = mongoose.model("Song", SongSchema);

module.exports = Song;
