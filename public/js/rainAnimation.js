(function(){
    function randomDrop() {
        // Select all raindrops, pick one at random and add animation class
        const rainBox = document.querySelectorAll("#rain > path");
        const num = Math.floor(Math.random() * rainBox.length);
        rainBox[num].setAttribute('class', 'rainfall');
	            
        // Remove animation class after raindrop reaches the bottom and reset position
        setTimeout( () => { 
            rainBox[num].removeAttribute('class', 'rainfall');
            rainBox[num].setAttribute('transform', 'translate(0 0)');
        }, 1000);
        
        // Call function recursively
        setTimeout( () => {
            randomDrop();
        } , 100);
    };
    randomDrop()
}());

