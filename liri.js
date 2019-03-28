require("dotenv").config();
var concerts = require("./concerts.js");
var movies = require("./movies.js");
var spotify = require("./spotify.js");
var inquirer = require("inquirer");

inquirer
  .prompt({
    type: "list",
    name: "searches",
    message: "What would you like to do today?",
    choices: [
      {
        name: "Search for movies",
        value: "movies"
      },
      {
        name: "Search for songs",
        value: "spotify"
      },
      {
        name: "Search for concerts",
        value: "concerts"
      },
      {
        name: "Wildcard! Do what it says...",
        value: "wildcard"
      }
    ]
  })
  .then(answer => {
    if (answer.searches === "movies") {
      movies();
    }
    if (answer.searches === "spotify") {
      spotify();
    }
    if (answer.searches === "concerts") {
      concerts();
    }
    if (answer.searches === "wildcard") {
      console.log("WILDCARD BITCHEEEEES");
    }
  });
