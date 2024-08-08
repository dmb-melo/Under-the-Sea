class JellyFish extends MovableObject{

    /** @type {number} The width and height of the jellyfish. */
    width = 60;
    height = 60;

    /** @type {Object} The offset values for the jellyfish. */
    offset = {
        offsetY: 0
    };

    /** @type {string[]} Array of image paths for the swimming animation. */
    IMAGES_SWIMM = [
        "./img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png",
        "./img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png",
        "./img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png",
        "./img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png",
        "./img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png",
        "./img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png"
    ];

    /** @type {string[]} Array of image paths for the dead animation. */
    IMAGES_DEAD = [
        "./img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png",
        "./img/2.Enemy/2 Jelly fish/Dead/green/g2.png",
        "./img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png",
        "./img/2.Enemy/2 Jelly fish/Dead/green/g4.png"
    ];
    

    /** @type {object} Reference to the game world. */
    world;

    /** @type {number} Index of the current image being displayed. */
    currentImage = 0;

    /**
     * Constructs a new Jellyfish object and initializes its properties.
     */
    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png');
        this.loadImages(this.IMAGES_SWIMM);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 300 + Math.random() * 2000;
        this.y = 80 + Math.random() * 200;
        this.animate();
    }

    /**
     * Animates the jellyfish by initiating its behavior.
     */
    animate() {
        this.swimmLeft();
        this.swimm();
        this.deadJellyFish();
    }

    /**
     * Plays the swimming animation for the jellyfish.
     */
    swimm() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIMM);
        }, 140);
    }

    /**
     *  Plays the animations according to the state of the JellyFish.  
     * @param {*} callback The callback function to executes the code after the animation is complete.
     */
        deadJellyFish(callback) {
            const animationInterval = setInterval(() => {
                if (this.isHurt()) {
                    console.log('JellyFish hit by bubble, playing animation');
                    this.playAnimation(this.IMAGES_DEAD);
                } else {
                    clearInterval(animationInterval); // Stop animation interval
                    // Check if a callback function is provided before calling it
                    if (typeof callback === 'function') {
                        callback(); // Call the callback function when animation completes
                    }
                }
            }, 80 );
        }
}
