const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const refType = Schema.Types.ObjectId;

const ArtistSchema = new Schema({
  username: { type: String, required: true },
  songs: [
    {
      type: refType, // Array of ObjectID's
      ref: "Song",
    },
  ],
});

const Artist = mongoose.model("Artist", ArtistSchema);

module.exports = Artist;
