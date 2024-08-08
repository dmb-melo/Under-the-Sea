class StatusBarLife extends DrawableObject{

    /**
    * Array of image paths for life percentage indicators.
    * @type {string[]}
    */
    IMAGES_LIFE =[ 
         "./img/4. Marcadores/green/Life/0_  copia 3.png", 
         "./img/4. Marcadores/green/Life/20_ copia 4.png",
         "./img/4. Marcadores/green/Life/40_  copia 3.png",
         "./img/4. Marcadores/green/Life/60_  copia 3.png",
         "./img/4. Marcadores/green/Life/80_  copia 3.png",
         "./img/4. Marcadores/green/Life/100_  copia 2.png"
    ];
    
    /**
    * The percentage of life remaining.
    * @type {number}
    */
    percentage = 100;

   /**
   * The x and y-coordinates position of the life indicator.
   * @type {number}
   */
    x = 100;
    y = 95;
 
    /**
    * Constructs a new LifeIndicator object and initializes its properties.
    * Loads images for life percentage indicators and sets the initial percentage.
    */
    constructor(){
     super();
     this.loadImages(this.IMAGES_LIFE);
     this.setPercentage(this.percentage);//or this.setPercentage(100);   
     this.height = 60;
     this.width = 150;
    }
 
    /**
    * sets the image to the correspondig percentage
    * 
    * @param {number} percentage between 100 and 0
    */
    setPercentage(percentage){
     this.percentage = percentage; //Number between 0...5
     let path = this.IMAGES_LIFE[this.resolveImageIndex()];
     this.img = this.imageCache[path];   
    }
 
    /**
    * 
    * @returns the correponding index of the picture in the IMAGES array according to the percentage
    * 
    */
    resolveImageIndex(){
     if(this.percentage == 100){
         return 5; //index = 5
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