module.exports = concertSearch

function concertSearch(input) {
    let inquirer = require('inquirer')
    let axios = require('axios')
    let moment = require('moment')

    let artist = 'Father+John+Misty'
    let queryUrl = `https://rest.bandsintown.com/artists/Father+John+Misty/events?app_id=codingbootcamp`



    axios.get(queryUrl).then(
        function (response) {
            console.log(response.data)
        }
    )

}

concertSearch()




// command will look like node liri.js concert-this <artist/band name here>

// and return name of venue || venua location || date of event (use moment to format as MM/DD/YYYY)