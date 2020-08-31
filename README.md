# is-it-raining-in-manchester
A tongue in cheek site that checks if it's raining in Manchester using the current forecast from the OpenWeather API

Built using [Node.js](https://nodejs.org/en/), the site displays the weather with an SVG which is rendered according to the forecast. Additional weather information is displayed in a card format.

Backend uses [Express](https://expressjs.com/) and [EJS](https://ejs.co/), as well as [dotenv](https://www.npmjs.com/package/dotenv) to set the local env variables.

Frontend uses [Bootstrap 4](https://getbootstrap.com/).

Site is live at: https://is-it-raining-in-manchester.herokuapp.com

## Installation

- `$ npm install`
- Get API key from https://home.openweathermap.org/users/sign_up
- Create `.env` file, add `API_KEY=` and paste your API key as the value
- `$ node app.js`
- Go to `localhost:3000` in your browser
