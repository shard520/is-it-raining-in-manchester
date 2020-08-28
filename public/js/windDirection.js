const compassDirectionsObj = {
	'North': {
		deg_interval: [0, 16.875],
	},
	'North-northeast': {
		deg_interval: [16.876, 39.375],
	},
	'Northeast': {
		deg_interval: [39.376, 61.875],
	},
	'East-northeast': {
		deg_interval: [61.876, 84.375],
	},
	'East': {
		deg_interval: [84.376, 106.875],
	},
	'East-southeast': {
		deg_interval: [106.876, 129.375],
	},
	'Southeast': {
		deg_interval: [129.376, 151.875],
	},
	'South-southeast': {
		deg_interval: [151.876, 174.375],
	},
	'South': {
		deg_interval: [174.376, 196.875],
	},
	'South-southwest': {
		deg_interval: [196.876, 219.375],
	},
	'Southwest': {
		deg_interval: [219.376, 241.875],
	},
	'West-southwest': {
		deg_interval: [241.876, 264.375],
	},
	'West': {
		deg_interval: [264.376, 286.875],
	},
	'West-northwest': {
		deg_interval: [286.876, 309.375],
	},
	'Northwest': {
		deg_interval: [309.376, 331.875],
	},
	'North-northwest': {
		deg_interval: [331.876, 343.125],
	},
	'North2': {
		deg_interval: [343.126, 360]
	}
};

// Convert directions object into arrays
const compassDirections = Object.entries(compassDirectionsObj);

// Get current wind direction in degrees as an integer
const windDirection = parseInt(document.getElementById('windDirection').innerText, 10);

// loop through arrays and compare current wind direction with boundaries for each direction in object
for(i = 0; i < compassDirections.length; i++){
    const degrees = compassDirections[i][1].deg_interval;
    if(windDirection >= degrees[0] && windDirection <= degrees[1]){
		const directionText = document.getElementById('windDirection');
		// Convert correct key to a string
		let directionLabel = compassDirections[i][0].toString();
		// Check if label is second North entry and format without the 2
		if(directionLabel === 'North2'){
			directionLabel = 'North';
		};
		//  Update wind direction with selected label
		directionText.innerText = directionLabel + ' (' + directionText.innerText + ')';
    };
};