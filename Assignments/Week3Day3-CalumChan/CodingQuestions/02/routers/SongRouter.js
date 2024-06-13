const { Router } = require("express");
const songController = require("../controllers/SongController.js");

const songRouter = Router();

// GET /songs?search=“”&language=“”&genre=“” : display a list of songs that match the search input based on artist name or song title, and filtering based on optional inputs such as language and genre.
songRouter.get("/", songController.getSongs);
// PUT /songs/:songid : user likes a song
// userid in body
songRouter.put("/:songid", songController.toggleLike); // Wait but isnt PUT idempotent?

module.exports = songRouter;
