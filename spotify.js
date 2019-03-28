// function requires a handful of things to work.  dotenv and keys are allowing me to store and use my personal keys without loading them up to github when I push code.

function spotifySearch() {
  require("dotenv").config();
  let inquirer = require("inquirer");
  let keys = require("./keys.js");
  let Spotify = require("node-spotify-api");
  let spotify = new Spotify(keys.spotify);

  // ask the user for the search terms
  inquirer
    .prompt({
      message: "What song would you like me to look up for you?",
      name: "song",
      type: "input"
    })
    // take the user input and plug it into the search, the spotify API is nice and handles spaces well so I didn't have to do any splitting/joining to get around that.

    .then(answer => {
      spotify.search({ type: "track", query: answer.song }, function(
        err,
        data
      ) {
        if (err) {
          console.log(err);
        }
        let res = data.tracks.items[0];
        let artist = res.artists[0].name;
        let songName = res.name;
        let link = res.external_urls.spotify;
        let album = res.album.name;
        let info = {
          artist,
          songName,
          link,
          album
        };

        console.log(info);
      });
    });
}

module.exports = spotifySearch;
