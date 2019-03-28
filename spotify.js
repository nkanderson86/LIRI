module.exports = spotifySearch;

function spotifySearch() {
  require("dotenv").config();
  let inquirer = require("inquirer");
  var keys = require("./keys.js");
  let Spotify = require("node-spotify-api");
  var spotify = new Spotify(keys.spotify);

  inquirer
    .prompt({
      message: "What song would you like me to look up for you?",
      name: "song",
      type: "input"
    })
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
