(function(){
    function randomDrop() {
        // Select all raindrops, pick one at random and add animation class
        const rainBox = document.querySelectorAll("#rain > g");
        const num = Math.floor(Math.random() * rainBox.length);
        
        rainBox[num].setAttribute('class', 'rainfall');
        
        // Remove animation class after raindrop reaches the bottom
        setTimeout( () => {
            rainBox[num].removeAttribute('class', 'rainfall');
        }, 750)
        
        // Call function recursively
        setTimeout( () => {
            randomDrop();
        } , 150);
    };
    randomDrop()
}());

