const db = require("./connection.js");
const User = require("../models/User.js");
const Song = require("../models/Song.js");
const Artist = require("../models/Artist.js");
(async () => {
  try {
    await Promise.all([User.deleteMany(), Song.deleteMany()]);

    const user = new User({
      username: "Calum",
      email: "carrumdraws@gmail.com",
      password: "123456789",
    });

    let songs = [
      {
        title: "Shape of You",
        artist: "Ed Sheeran",
        genre: "Pop",
        language: "English",
      },
      {
        title: "Perfect",
        artist: "Ed Sheeran",
        genre: "Pop",
        language: "English",
      },
      {
        title: "Thinking Out Loud",
        artist: "Ed Sheeran",
        genre: "Pop",
        language: "English",
      },
      {
        title: "Castle on the Hill",
        artist: "Ed Sheeran",
        genre: "Pop Rock",
        language: "English",
      },
      {
        title: "Galway Girl",
        artist: "Ed Sheeran",
        genre: "Pop",
        language: "English",
      },
      {
        title: "Photograph",
        artist: "Ed Sheeran",
        genre: "Pop",
        language: "English",
      },
      {
        title: "Beautiful People",
        artist: "Ed Sheeran",
        genre: "Pop",
        language: "English",
      },
      {
        title: "I Don't Care",
        artist: "Ed Sheeran",
        genre: "Pop",
        language: "English",
      },
      {
        title: "Afterglow",
        artist: "Ed Sheeran",
        genre: "Pop",
        language: "English",
      },
      {
        title: "Bad Habits",
        artist: "Ed Sheeran",
        genre: "Pop",
        language: "English",
      },
      {
        title: "Me Dediqué a Perderte",
        artist: "Alejandro Fernández",
        genre: "Latin Pop",
        language: "Spanish",
      },
      {
        title: "Como Quien Pierde una Estrella",
        artist: "Alejandro Fernández",
        genre: "Mariachi",
        language: "Spanish",
      },
      {
        title: "Si Tú Supieras",
        artist: "Alejandro Fernández",
        genre: "Latin Pop",
        language: "Spanish",
      },
      {
        title: "Canta Corazón",
        artist: "Alejandro Fernández",
        genre: "Latin Pop",
        language: "Spanish",
      },
      {
        title: "Hoy Tengo Ganas de Ti",
        artist: "Alejandro Fernández",
        genre: "Latin Pop",
        language: "Spanish",
      },
      {
        title: "青花瓷 (Blue and White Porcelain)",
        artist: "Jay Chou",
        genre: "Mandopop",
        language: "Chinese",
      },
      {
        title: "晴天 (Sunny Day)",
        artist: "Jay Chou",
        genre: "Mandopop",
        language: "Chinese",
      },
      {
        title: "夜曲 (Nocturne)",
        artist: "Jay Chou",
        genre: "Mandopop",
        language: "Chinese",
      },
      {
        title: "告白气球 (Love Confession)",
        artist: "Jay Chou",
        genre: "Mandopop",
        language: "Chinese",
      },
      {
        title: "稻香 (Rice Field)",
        artist: "Jay Chou",
        genre: "Mandopop",
        language: "Chinese",
      },
    ];

    let artists = [
      { username: "Ed Sheeran" },
      { username: "Alejandro Fernández" },
      { username: "Jay Chou" },
    ];

    // Returns promise that resolves into Arr of data
    await Song.insertMany(songs);
    await Artist.insertMany(artists);

    // user.likes = addedSongs.map((song) => song._id);
    await user.save();

    console.log("DB initialized");
  } catch (error) {
    console.error(error);
  } finally {
    await db.close();
  }
})();
