class MovableObject extends DrawableObject{   

    
    /** 
    * @type {number} speed, energy and lastHit of the enemies. */ 
    speed = 0.3;
    energy = 100;
    lastHit = 0;
  
    /**
    * Moves the enemies to the left.
    */
    swimmLeft(){ //enemies
        this.swimmLeftInterval = setInterval(() =>{
            this.x -= this.speed;
        }, 1000 / 60);   
    }
    
    /**
     * Sets new values or the coordinates so that the collision is more exact.
     * @param {obj} obj - object in the world as Character, enemies and other obstacles 
     * @returns collision
     */
   
    isColliding(obj) {  
    if (obj instanceof ThrowBubble || obj instanceof ThrowPoisonBubble) {
        return (this.x + this.width) >= obj.x &&
               this.x <= (obj.x + obj.width) &&
               (this.y + this.height) >= obj.y &&
               this.y <= (obj.y + obj.height);
              
        } else if (obj instanceof JellyFish || obj instanceof PufferFish || obj instanceof Coin || obj instanceof Poison || obj instanceof FinalEnemy) {
                return ((this.x + this.width) - this.offset.offsetX) >= obj.x && 
                this.x <= (obj.x + obj.width) && 
                ((this.y + this.height) + this.offset.offsetY) >= obj.y && 
                (this.y + this.offset.offsetZ) <= (obj.y + obj.height);              
        }   
    }

    /**
    * Ensures that the energy level is never less than zero and gets the current time in milliseconds as number 
    */
    hit(){
        this.energy -= 5;
        if(this.energy < 0){
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }        
    }    

    /**
    * Cheks if the energy level is zero so the character is dead.
    * @returns true or false if the value is zero or not
    */
    isDead(){
      return this.energy == 0;     
    }

    /**
    * 
    * @returns true when timepassed <1.
    */
    isHurt(){
      let timepassed = new Date().getTime() - this.lastHit; 
      timepassed = timepassed / 1000; 
      return timepassed < 1;
    }


/**
* Handles the movement of a bubble, making it move upwards.
* If the bubble's y-coordinate reaches 850, it marks the bubble as expired.
*/
bubbleMovement() {
    const moveBubble = () => {
        if (!this.expired) {
            this.x += this.speedX;
            this.y -= this.speedY; // Move upwards
            if (this.y >= 850) {
                this.expired = true;
            }
        }
    };
    const intervalId = setInterval(moveBubble, 25);
}

/**
* Plays an animation sequence for introducing an enemy.
* Clears any existing animation interval and starts a new one.
* @param {string[]} images - An array of image paths for the introduction animation.
*/
interduceEnemyAnimation(images) {
    if (this.animationInterval) {
        clearInterval(this.animationInterval);
    }
    this.currentImage = 0;
    this.animationInterval = setInterval(() => {
        if (this.currentImage >= images.length) {
            clearInterval(this.animationInterval); 
            return; 
        }
        let path = images[this.currentImage];
        this.img = this.imageCache[path];
        this.currentImage++;
    }, 300);
}


}