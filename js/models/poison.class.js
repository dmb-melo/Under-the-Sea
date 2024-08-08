class Poison extends MovableObject {

    /**
     * @type {number} width ans height of the poison images.
     */
    width = 80;
    height = 100;
 

    /** @type {string[]} Array of image paths for poison animation. */
    IMAGES = [
        'img/4. Marcadores/Posión/Animada/1.png',
        'img/4. Marcadores/Posión/Animada/2.png',
        'img/4. Marcadores/Posión/Animada/3.png',
        'img/4. Marcadores/Posión/Animada/4.png',
        'img/4. Marcadores/Posión/Animada/5.png',
        'img/4. Marcadores/Posión/Animada/6.png',
        'img/4. Marcadores/Posión/Animada/7.png',
        'img/4. Marcadores/Posión/Animada/8.png',

    ];

    world;
    currentImage =  0;
    
    /**
     * This function load the images and a random position for the poison bottles
     * 
     */
    constructor() {
        super().loadImage('img/4. Marcadores/Posión/Animada/1.png');   
        this.loadImages(this.IMAGES);
        this.x = 200 + Math.random() * 1500;
        this.y = 50 + Math.random() * 300;
        this.animate();
    }

    /**
     * This function animate the poison bottles
     * 
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 150);
    }
}