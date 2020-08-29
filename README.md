# is-it-raining-in-manchester
A tongue in cheek site that checks if it's raining in Manchester using the current forecast from the OpenWeather API

Built using <a href="https://nodejs.org/en/">Node.js</a>, the site displays the weather with an SVG which is rendered according to the forecast. Additional weather information is displayed in a card format.

Site uses <a href="https://expressjs.com/">Express</a> and <a href="https://ejs.co/">EJS</a>, as well as <a href="https://www.npmjs.com/package/dotenv">dotenv</a> to set the local env variables.

## Installation

- `$ npm install`
- Get API key from https://home.openweathermap.org/users/sign_up
- Create `.env` file, add `API_KEY=` and paste your API key as the value
- `$ node app.js`
- Go to `localhost:3000` in your browser
