class ScreenWin extends DrawableObject  {

    /**
    * Array of image paths for the "You Win" screen animation.
    * @type {string[]}
    */
    IMAGES_WIN = [
        'img/6.Botones/Tittles/You win/Recurso 19.png',
        'img/6.Botones/Tittles/You win/Recurso 20.png',
        'img/6.Botones/Tittles/You win/Recurso 21.png',
        'img/6.Botones/Tittles/You win/Recurso 22.png',
    ];

    /**
     * This function load the images, the size and the position of the winning screen
     * 
     */
    constructor() {
        super().loadImage('');
        this.loadImages(this.IMAGES_WIN);  
        this.width = 550;
        this.height = 300;
        this.x = 95;
        this.y = 120;     
    }

    /**
     * This function animate the winning screen
     * 
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WIN);
        }, 250);
    }
}


