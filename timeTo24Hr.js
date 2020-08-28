exports.convertTo24Hr = function(timezone, timeParam){
	// Add current GMT timezone to timeParam and convert to milliseconds
	var thisTime = (timezone + timeParam) * 1000;
	
	var time = new Date(thisTime);
	var hours = time.getUTCHours();
	var minutes = time.getUTCMinutes();
	
	// Add leading 0 for hours if before 10am
	if(hours < 10){
		hours = '0' + hours;
	};

	// Add leading 0 if minutes are less than 10
	if(minutes < 10){
		minutes = '0' + minutes;
	};

	thisTime = hours + ':' + minutes;
	
	return thisTime;
};