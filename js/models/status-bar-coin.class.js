class StatusBarCoin extends  DrawableObject{

    /**
    * Array of image paths for coin percentage indicators.
    * @type {string[]}
    */
    IMAGES_COINS =[
         "./img/4. Marcadores/green/Coin/0_  copia 4.png",
         "./img/4. Marcadores/green/Coin/20_  copia 2.png",
         "./img/4. Marcadores/green/Coin/40_  copia 4.png",
         "./img/4. Marcadores/green/Coin/60_  copia 4.png",
         "./img/4. Marcadores/green/Coin/80_  copia 4.png",
         "./img/4. Marcadores/green/Coin/100_ copia 4.png"
    ];

    /**
     * The percentage of the coin.
     * @type {number}
     */
    percentage = 0;

    /**
     * The x and y-coordinate position of the coin.
     * @type {number}
     */ 
    x = 100;
    y = 50;
 
    /**
     * Constructs a new Coin object with a specified percentage.
     * @param {number} [coinPercentage=0] - The initial percentage of the coin.
     */
    constructor(coinPercentage = 0){
     super();
     this.loadImages(this.IMAGES_COINS);
     this.setPercentage(coinPercentage);
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
     let coins = this.IMAGES_COINS[this.resolveImageIndex()];
     this.img = this.imageCache[coins];    
    }

    /**
    * 
    * @returns the correponding index of the picture in the IMAGES array according to the percentage
    * 
    */
    resolveImageIndex(){
     if(this.percentage >= 100){
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

    /**
     * Decreases the coin's percentage by the specified value.
     * Ensures the percentage does not go below zero and updates the percentage display.
     * @param {number} value - The amount by which to decrease the percentage.
     */
    decreasePercentage(value) {  
            this.percentage = Math.max(0, this.percentage - value);       
            this.setPercentage(this.percentage);
    }


    /**
    * Checks if the coin's percentage is zero.
    * @returns {boolean} True if the percentage is zero, otherwise false.
    */
    isZero() {
        return this.percentage === 0;
    }
 
 }