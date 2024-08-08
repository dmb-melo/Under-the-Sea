
/**
 * Global variables
 */
let canvas;
let world;
let coinPercentage;

/**
 * Initializes the game by setting up the canvas, world, and other necessary components.
 * 
 * @param {number} [coinPercentage=100] - The initial percentage of coins.
 * @returns {void}
 */
function init(coinPercentage = 100){
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard, coinPercentage, level);
}

/**
 * Event listener for keydown events.
 * Updates the `keyboard` object to reflect the currently pressed keys.
 * 
 * @param {KeyboardEvent} e - The keydown event.
 * @returns {void}
 */
window.addEventListener("keydown", (e) =>{
    if(e.keyCode == 39){
        keyboard.RIGHT = true;
    }

    if(e.keyCode == 37){
        keyboard.LEFT = true;
    }

    if(e.keyCode == 38){
        keyboard.UP = true;
    }

    if(e.keyCode == 40){
        keyboard.DOWN = true;
    }

    if(e.keyCode == 32){
        keyboard.SPACE = true;
    }

    if(e.keyCode == 68){
        keyboard.D = true;
    }
});

/**
 * Event listener for keyup events.
 * Updates the `keyboard` object to reflect the currently released keys.
 * 
 * @param {KeyboardEvent} e - The keyup event.
 * @returns {void}
 */
window.addEventListener("keyup", (e) =>{
    if(e.keyCode == 39){
        keyboard.RIGHT = false;
    }

    if(e.keyCode == 37){
        keyboard.LEFT = false;
    }

    if(e.keyCode == 38){
        keyboard.UP = false;
    }

    if(e.keyCode == 40){
        keyboard.DOWN = false;
    }

    if(e.keyCode == 32){
        keyboard.SPACE = false;
    }
    
    if(e.keyCode == 68){
        keyboard.D = false;
    }
});

