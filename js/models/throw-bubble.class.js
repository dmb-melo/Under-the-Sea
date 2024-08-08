class ThrowBubble extends MovableObject {
   

    /**
     * The width, height, speed in vertical and horizontal direction of the bubble.
     * @type {number}
     */
    width = 100;
    height = 100;
    speedY = 0;
    speedX = 10;


    /**
     * Constructs a new ThrowBubble object.
     * @param {number} x - The initial x-coordinate of the bubble.
     * @param {number} y - The initial y-coordinate of the bubble.
     * @param {boolean} isFacingLeft - Indicates if the bubble is facing left (true) or right (false).
     */
    constructor(x, y, isFacingLeft) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.isFacingLeft = isFacingLeft;
        this.speedX = isFacingLeft ? -10 : 10;            
        this.bubbleMovement();
        if (isFacingLeft) {            
            this.x = x  + 20;
        }
    }
}


