canvasHeight = 480;

class BackgroundObject extends MovableObject{
    constructor (imagePath, x){
        super().loadImage(imagePath);
        this.width = 720;
        this.height = 480;
        this.y = canvasHeight - this.height;
        this.x = x;


    }







}