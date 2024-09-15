
/**
 * Displays the explain screen for 3 seconds, then hides it.
 * The start screen is hidden while the explain screen is visible.
 * 
 * @returns {void}
 */
function explainScreen() {
    let startScreen = document.querySelector('.start-screen');
    startScreen.style.display = 'none';

    let explainScreen = document.getElementById('explainScreen');
    explainScreen.style.display = 'block';

    setTimeout(() => {
        explainScreen.style.display = 'none';
    }, 3000); 
}

/**
 * Displays the start screen and initializes the game.
 * The start screen is shown, and the `init` function is called.
 * 
 * @returns {void}
 */
function showStartScreen() {    
    let startScreen = document.getElementById('startScreen');
    startScreen.style.display = 'block';
    if (startScreen.style.display == 'block') {  
        init();
    }
}

/**
 * Displays the try again screen and hides the other screens.
 * The try again screen is shown, and the `init` function is called with the current coin percentage.
 * 
 * @returns {void}
 */
function showTryAgainScreen() {
    let tryAgainScreen = document.getElementById('tryAgainScreen');
    tryAgainScreen.style.display = 'block';

    if (tryAgainScreen.style.display == 'block') {
        coinPercentage = world.statusBarCoin.percentage;  
        init(coinPercentage);  
    }

    let explainScreen = document.getElementById('explainScreen');
    explainScreen.style.display = 'none';

    let startScreen = document.querySelector('.start-screen');
    startScreen.style.display = 'none';
}

/**
 * Hides all screens: explain screen, start screen, and try again screen.
 * 
 * @returns {void}
 */
function tryAgainScreen() {
    let explainScreen = document.getElementById('explainScreen');
    explainScreen.style.display = 'none';

    let startScreen = document.querySelector('.start-screen');
    startScreen.style.display = 'none';
    
    let tryAgainScreen = document.getElementById('tryAgainScreen');
    tryAgainScreen.style.display = 'none';
}



