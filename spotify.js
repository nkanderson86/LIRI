module.exports = spotifySearch

require("dotenv").config();
let inquirer = require('inquirer')
var keys = require("./keys.js");
let Spotify = require("node-spotify-api")
var spotify = new Spotify(keys.spotify);

function spotifySearch(input) {

}