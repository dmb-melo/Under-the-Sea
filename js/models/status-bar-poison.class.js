class StatusBarPoison extends DrawableObject{

    /**
    * Array of image paths for poisoned bubbles percentage indicators.
    * @type {string[]}
    */
    IMAGES_POISON = [
         "./img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png",
         "./img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png",
         "./img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png",
         "./img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png",
         "./img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png",
         "./img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png"
    ];
    
    /**
    * The percentage of poison bubbles remaining.
    * @type {number}
    */
    percentage = 0;

    /**
    * The x and y-coordinates position of the poison bubbles indicator.
    * @type {number}
    */
    x = 100;
    y = 0;
 
    /**
    * Constructs a new PoisonIndicator object and initializes its properties.
    * Loads images for poison percentage indicators and sets the initial percentage.
    */
    constructor(){
     super();
     this.loadImages(this.IMAGES_POISON);
     this.setPercentage(this.percentage);
     this.height = 60;
     this.width = 150;
    }
 
    /**
    * sets the image to the correspondig percentage
    * 
    * @param {number} percentage between 100 and 0
    */
    setPercentage(percentage){
     this.percentage = percentage; 
     let poison = this.IMAGES_POISON[this.resolveImageIndex()];
     this.img = this.imageCache[poison]; 
    }
 
    /**
    * 
    * @returns the correponding index of the picture in the IMAGES array according to the percentage
    * 
    */
    resolveImageIndex(){
     if(this.percentage == 100){
         return 5; 
     }else if(this.percentage > 80){
         return 4;
     }else if(this.percentage > 60){
         return 3;
     }else if(this.percentage > 40){
         return 2;
     }else if(this.percentage > 20){
         return 1;
     }else {
         return 0;}
    }
 
 }


