const express = require('express');
const https = require('https');
const ejs = require('ejs');
const time = require(__dirname + '/timeTo24Hr.js');

require('dotenv').config()

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
			
			if (weatherDescription.includes('rain')){
				res.render('rain', {
					weatherData: weatherData,
					timeNow: timeNow,
					title: "Yes, it's Raining in Manchester",
					sunrise: sunrise,
					sunset: sunset,
				});
			}	else {
					res.render('no-rain', {
						weatherData: weatherData,
						timeNow: timeNow,
						title: "No, it's Not Raining in Manchester",
						sunrise: sunrise,
						sunset: sunset,
					});
				};
				
			console.log(weatherData);

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

app.listen(3000, () => {
	console.log("Server running on port 3000");
});