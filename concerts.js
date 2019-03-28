module.exports = concertSearch;

function concertSearch() {
  let inquirer = require("inquirer");
  let axios = require("axios");
  let moment = require("moment");

  inquirer
    .prompt({
      message: "What band would you like me to look up for you?",
      name: "band",
      type: "input"
    })
    .then(answer => {
      axios
        .get(
          `https://rest.bandsintown.com/artists/${
            answer.band
          }/events?app_id=codingbootcamp`
        )
        .then(resp => {
          for (let i = 0; i < resp.data.length; i++) {
            //   console.log(resp.data[0]);
            let concert = resp.data[i];
            let artist = concert.lineup[0];
            let venue = concert.venue.name;
            let location = concert.venue.city + ", " + concert.venue.country;
            let date = moment(concert.datetime).format("MM/DD/YYYY");
            let results = {
              artist,
              venue,
              location,
              date
            };
            console.log(results);
          }
        });
    });
}
