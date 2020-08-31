if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}
  
const express = require('express');
const https = require('https');
const ejs = require('ejs');
const time = require(__dirname + '/timeTo24Hr.js');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'))

app.get('/', (req, res) => {

	const city = '2643123';
	const appid = process.env.API_KEY;
	const url = 'https://api.openweathermap.org/data/2.5/weather?id=' + city + '&appid=' + appid + '&units=metric';

	https.get(url, (response) => {
		
		if(response.statusCode === 429){
			return res.redirect('/429');			
		};

		response.on('data', (data) => {
			
			weatherData = JSON.parse(data);
			const weatherDescription = weatherData.weather[0].description;
			const timeNow = Math.floor(Date.now() / 1000);
			const sunrise = time.convertTo24Hr(weatherData.timezone, weatherData.sys.sunrise);
			const sunset = time.convertTo24Hr(weatherData.timezone, weatherData.sys.sunset);
			const options = {
				weatherData: weatherData,
				timeNow: timeNow,
				title: 'Is it raining in Manchester?',
				sunrise: sunrise,
				sunset: sunset,
			};

			if (weatherDescription.includes('rain')){
				res.render('rain', options);
			}	else {
					res.render('no-rain', options);
				};
				
		});
				
	});
});

app.get('/429', (req, res) => {
	res.render('429', {
		title: '429 - Oops...'
	});
});

app.use(function (req, res, next) {
	res.status(404).render('404', {
		title: '404 - not found'
	});
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, () => {
	console.log('Server started successfully on port ' + port);
});