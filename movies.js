module.exports = omdbSearch;

function omdbSearch() {
  let inquirer = require("inquirer");
  let axios = require("axios");

  inquirer
    .prompt({
      message: "What movie title would you like me to look up for you?",
      name: "movie",
      type: "input"
    })
    .then(answer => {
      axios
        .get(
          `http://www.omdbapi.com/?apikey=trilogy&t=${answer.movie
            .split(" ")
            .join("+")}`
        )
        .then(ans => {
          let movie = ans.data;
          let Title = movie.Title;
          let Year = movie.Year;
          let IMDB = movie.Ratings[0].Value;
          let RottenTomatoes = movie.Ratings[1].Value;
          let Country = movie.Country;
          let Language = movie.Language;
          let Plot = movie.Plot;
          let Actors = movie.Actors;

          let result = {
            Title,
            Year,
            IMDB,
            RottenTomatoes,
            Country,
            Language,
            Plot,
            Actors
          };
          console.log(result);
        });
    })
    .catch(err => {
      console.log(err);
    });
}
