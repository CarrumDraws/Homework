const app = require("./app.js");
const db = require("./config/connection.js");
const PORT = process.env.PORT || 3000;

// Spotify Lite (Express.js, MongoDB)
// This application should have the following features:
// - Users can view all the songs that they’ve liked.
// - Users can search for songs based on the artist name or song title.
// - Users can filter song search results based on their language and genre.
// - Users can like a song.
// - Users can follow an artist.
// - Users can view & edit their own profile (username, email, password).

// Step 1: Data Modeling
// Decide on the different entities and schemas that you will use. Include them here (you can
// take screenshots of the schema code).
// User : username, email, password, [likes (songId)], [follows (artistId)]
// Song : title, artist, genre, language
// Artist : username, [songs (songId)]

// Step 2: Implement the API
// Since we haven’t yet discussed login/registration/user auth, you can hardcode some users in the database. Then you can manually add the userID in the requests to these routes.

// GET /user/songs : display all the songs that a user liked (Use /user/{userId}/songs instead. Adheres to RESTFUL API standards better.)
// PUT /user/info : user updates their username, email, or password. (/user/{userId}/info)

// GET /songs?search=“”&language=“”&genre=“” : display a list of songs that match the search input based on artist name or song title, and filtering based on optional inputs such as language and genre.
// PUT /songs : user likes a song

// PUT /artists : user follows an artist
// /artists/{artistid} userid in body

// Step 3: Test the API with Postman
// Include screenshots of the server responses when using Postman.

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on http://localhost:${PORT}`);
  });
});
