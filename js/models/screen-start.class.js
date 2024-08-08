class ScreenStart extends DrawableObject {

    /**
     * Array of image paths for the start button animation.
     * @type {string[]}
     */
    IMAGES = [
        'img/6.Botones/Start/1.png',
        'img/6.Botones/Start/2.png',
        'img/6.Botones/Start/3.png',
    ]


    /**
     * This function load the start screen on the right position and the right size
     * 
     */
    constructor() {
        super().loadImage('');
        this.loadImages(this.IMAGES);
        this.width = 720;
        this.height = 480;
        this.x = 0;
        this.y = 0;
    }

     /**
     * This function animate the endscreen
     * 
     */
     animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 250);
    }
  
}