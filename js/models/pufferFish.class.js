class PufferFish extends MovableObject{
    
    /**
     * @type {number} width ans height of the pufferfish images.
     */
    width = 60;
    height = 60;

       /** 
        * Offset values for pifferfish positioning.
        * @type {{offsetY: number, offsetX: number, offsetZ: number}} 
        */
    offset ={
        offsetY: 0
    }

    /** @type {string[]} Array of image paths for swimming animation. */
    IMAGES_SWIMM= [        
        "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
        "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
        "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
        "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
        "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png",
    ];
    
    /** @type {string[]} Array of image paths for dead animation. */
    IMAGES_DEAD = [
        "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.2.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.3.png",
        "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.3.png",
    ];

    world;
    currentImage =  0;

    /**
    * Creates an instance of pufferfish.
    */
    constructor(){
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.IMAGES_SWIMM); 
        this.loadImages(this.IMAGES_DEAD);     
        this.x = 300 + Math.random() * 2000;
        this.y = 50 + Math.random() * 300;
        this.animate();
    }

    /**
    * Animates the pufferfish.
    */
    animate() {
        this.swimmLeft();
        this.swimm();    
        this.deadPufferFish();   
    }

    /**
    * Moves the pufferfishes to the left.
    */
    swimm(){
        setInterval(() =>{
            this.playAnimation(this.IMAGES_SWIMM);  
        }, 140);
    } 
    
    /**
    *  Plays the animations according to the state of the PufferFish.  
    * @param {*} callback The callback function to executes the code after the animation is complete.
    */
    deadPufferFish(callback) {//const atatt let
        let animationInterval = setInterval(() => {
            if (this.isHurt()) {
                console.log('JellyFish hit by bubble, playing animation');
                this.playAnimation(this.IMAGES_DEAD);
            } else {
                clearInterval(animationInterval); // Stop animation interval
                if (typeof callback === 'function') {
                    callback(); // Call the callback function when animation completes
                }
            }
        }, 80);
    }   
}