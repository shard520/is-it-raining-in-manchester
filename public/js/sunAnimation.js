(function(){	
	const oddRays = document.querySelectorAll('#sunrays1 > *');
	const evenRays = document.querySelectorAll('#sunrays2 > *');

	// Remove animation class from even rays and add to odd rays, once animation has finished call evenAnimate
	function oddAnimate() {
		for (i = 0; i < evenRays.length; i++) {
			evenRays[i].removeAttribute('class', 'sunshine');
		};

		for (i = 0; i < oddRays.length; i++) {
			oddRays[i].setAttribute('class', 'sunshine');
		};
	
		setTimeout(() => {
			evenAnimate();
		}, 2000);
	};

	// Remove animation class from odd rays and add to even rays, once animation has finished call oddAnimate
	function evenAnimate() {
		for (i = 0; i < oddRays.length; i++) {
			oddRays[i].removeAttribute('class', 'sunshine');
		};
		
		for (i = 0; i < evenRays.length; i++) {
			evenRays[i].setAttribute('class', 'sunshine');
		};

		setTimeout(() => {
			oddAnimate();
		}, 2000);
	};

oddAnimate();
}());

