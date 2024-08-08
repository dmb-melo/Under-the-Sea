class ScreenLose extends DrawableObject {

    /**
     * Array of image paths for the "Game Over" screen animation.
     * @type {string[]}
     */
    IMAGES_LOSE = [
        'img/6.Botones/Tittles/Game Over/Recurso 9.png',
        'img/6.Botones/Tittles/Game Over/Recurso 10.png',
        'img/6.Botones/Tittles/Game Over/Recurso 11.png',
        'img/6.Botones/Tittles/Game Over/Recurso 12.png',
        'img/6.Botones/Tittles/Game Over/Recurso 13.png',
    ]

    /**
     * This function load the images, the size and the position from the endscreen
     * 
     */
    constructor() {
        super().loadImage('');
        this.loadImages(this.IMAGES_LOSE);  
        this.width = 550;
        this.height = 300;
        this.x = 95;
        this.y = 120;     
    }

    /**
     * This function animate the endscreen
     * 
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_LOSE);
        }, 250);
    }
}