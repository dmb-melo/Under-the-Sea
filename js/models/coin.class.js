class Coin extends  MovableObject{


    /** @type {number} Width anf height of the coin. */
    width = 50;
    height = 50;

    
    /** @type {string[]} Array of image paths for the coin animation. */
    IMAGES = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png',
    ];

    world;
    currentImage =  0;

    /**
     * This functions loads the coin images and give them different positions
     * 
     */
    constructor() {
        super().loadImage('img/4. Marcadores/1. Coins/1.png');    
        this.loadImages(this.IMAGES);
        this.x = 200 + Math.random() * 1500;
        this.y = 50 + Math.random() * 300;
        this.animate();
    }

    /**
     * This function animate the coins
     * 
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 150);
    }
}