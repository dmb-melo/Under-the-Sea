class DrawableObject{

    /** @type {number} The x and y position, the height, widthan d the current image of the object. */
    x = 120;
    y = 150;  
    height = 100;
    width = 100;
    img;

    /** @type {Object.<string, HTMLImageElement>} Cache for loaded images. */
    imageCache = {};

    /** @type {number} Index of the current image being displayed. */
    currentImage = 0;
    
    /**
     * Loads an image from the specified path.
     * @param {string} path - The path to the image.
     */
    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Loads multiple images from the specified array of paths and caches them.
     * @param {string[]} arr - The array of image paths.
     */
    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img; 
        });
    }
 
    /**
     * Draws the object on the specified canvas context.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
     */
    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * Plays an animation by cycling through the specified array of images.
     * @param {string[]} images - The array of image paths for the animation.
     */
    playAnimation(images){     
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++; 
    }

}