    class Character extends MovableObject{

        /** 
        * @type {number} Width, height, speed and initial x positin of the character. */ 
        width = 200;
        height = 200;
        speed = 10;
        x = 150;
        isAttacking = false;
    
        /** 
        * Offset values for character positioning.
        * @type {{offsetY: number, offsetX: number, offsetZ: number}} 
        */
        offset = {
            offsetY: -40,
            offsetX: 60,
            offsetZ: 110
        };

        /** @type {string[]} Array of image paths for swimming animation. */
        IMAGES_SWIMM = [
            './img/1.Sharkie/3.Swim/1.png',
            './img/1.Sharkie/3.Swim/2.png',
            './img/1.Sharkie/3.Swim/3.png',
            './img/1.Sharkie/3.Swim/4.png',
            './img/1.Sharkie/3.Swim/5.png',
            './img/1.Sharkie/3.Swim/6.png'
        ];

        /** @type {string[]} Array of image paths for attack animation. */
        IMAGES_ATTACK = [
            'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/1.png',
            'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/2.png',
            'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/3.png',
            'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/4.png',
            'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/5.png',
            'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/6.png',
            'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/7.png',
        ];

        /** @type {string[]} Array of image paths for attacking the final enemy animation. */
        IMAGES_ATTACK_FINALENEMY = [
            'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/1.png',
            'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/2.png',
            'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/3.png',
            'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/4.png',
            'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/5.png',
            'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/6.png',
            'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/7.png',
        ];


        /** @type {string[]} Array of image paths for dead animation. */
        IMAGES_DEAD = [
            'img/1.Sharkie/6.dead/1.Poisoned/1.png',
            'img/1.Sharkie/6.dead/1.Poisoned/2.png',
            'img/1.Sharkie/6.dead/1.Poisoned/3.png',
            'img/1.Sharkie/6.dead/1.Poisoned/4.png',
            'img/1.Sharkie/6.dead/1.Poisoned/5.png',
            'img/1.Sharkie/6.dead/1.Poisoned/6.png',
            'img/1.Sharkie/6.dead/1.Poisoned/7.png',
            'img/1.Sharkie/6.dead/1.Poisoned/8.png',
            'img/1.Sharkie/6.dead/1.Poisoned/9.png',
            'img/1.Sharkie/6.dead/1.Poisoned/10.png',
            'img/1.Sharkie/6.dead/1.Poisoned/11.png',
            'img/1.Sharkie/6.dead/1.Poisoned/12.png'
        ];


        /** @type {string[]} Array of image paths for poisoned animation. */
        IMAGES_POISONED = [
            'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
            'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
            'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
            'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
            'img/1.Sharkie/5.Hurt/1.Poisoned/5.png',
            'img/1.Sharkie/5.Hurt/1.Poisoned/PreviewOP_2.gif',        
        ];


    /** @type {string[]} Array of image paths for electric shock animation. */
        IMAGES_ELECTRICSHOCK = [
            'img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
            'img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
            'img/1.Sharkie/5.Hurt/2.Electric shock/3.png',
            
        ];

            /** @type {string[]} Array of image paths for winning animation. */
        IMAGES_WINNING =[
            'img/1.Sharkie/4.Attack/Fin slap/1.png',
            'img/1.Sharkie/4.Attack/Fin slap/2.png',
            'img/1.Sharkie/4.Attack/Fin slap/3.png',
            'img/1.Sharkie/4.Attack/Fin slap/4.png',
            'img/1.Sharkie/4.Attack/Fin slap/5.png',
            'img/1.Sharkie/4.Attack/Fin slap/6.png',
            'img/1.Sharkie/4.Attack/Fin slap/7.png',
            'img/1.Sharkie/4.Attack/Fin slap/8.png',
        ];
        
        world;
        // swimming_sound = new Audio('audio/mainSound.mp3');
        currentImage =  0;


        /**
        * Creates an instance of Character.
        */
        constructor(){  
            super().loadImage('img/1.Sharkie/1.IDLE/1.png');
            this.loadImages(this.IMAGES_SWIMM);      
            this.loadImages(this.IMAGES_DEAD);     
            this.loadImages(this.IMAGES_POISONED);
            this.loadImages(this.IMAGES_ELECTRICSHOCK);     
            this.loadImages(this.IMAGES_ATTACK);
            this.loadImages(this.IMAGES_ATTACK_FINALENEMY);        
            this.loadImages(this.IMAGES_WINNING);     
            this.animate();   
            this.hasDecreasedPercentage = false;           
        }

        /**
        * Animates the character by updating its state at regular intervals.
        */
        animate(){
            setInterval(() =>{           
                this.swimmRight();
                this.swimmLeft();
                this.swimUp();
                this.swimDown();
                this.attack();
                this.attackFinalEnemy();           
            }, 1000 / 15);           
            this.play();          
        }   

        
        /**
        * Moves the character to the right.
        */
        swimmRight(){
            if(this.isAlive() && this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x){
                this.x += this.speed;
                this.otherDirection = false; 
                // this.swimming_sound.play();       
            }
            this.world.camera_x = -this.x + 100;
        }


        /**
         * Moves the character to the left.
         */
        swimmLeft(){
            if(this.isAlive() && this.world.keyboard.LEFT && this.x > -610){ //&& this.x > -610 verhindert, dass Sharkie, wenn es nach links läuft, aud dem Kanvas geht. Es kann nicht weiter nach links schwimmen
                this.otherDirection = true;                  
                this.x -= this.speed;   
                // this.swimming_sound.play();                        
            }
            this.world.camera_x = -this.x + 100;
        }
        
        /**
        * Moves the character up.
        */
        swimUp(){
            if (this.isAlive() && this.world.keyboard.UP && this.y > -70) {
                this.y -= this.speed / 2;
                // this.swimming_sound.play();  
            }
        }

        /**
        * Moves the character down.
        */
        swimDown(){
            if (this.isAlive() && this.world.keyboard.DOWN && this.y < 320) {
                this.y += this.speed / 2;
                // this.swimming_sound.play();  
            }
        }

        /**
        * Plays the animations according to the state of the Character (hurt, dead or swimming)
        */
        play() {
            let deadAnimationPlayed = false;
            setInterval(() => {
                if (this.isDead() && !deadAnimationPlayed) {
                    this.playAnimation(this.IMAGES_DEAD);
                    this.world.showLosingScreen();
                    deadAnimationPlayed = true;
                } else if (this.world.collidedEnemyType === 'finalenemy' && !deadAnimationPlayed) {
                    this.playAnimation(this.IMAGES_DEAD);
                    this.world.showLosingScreen();
                    this.energy = 0;
                    deadAnimationPlayed = true;//in this case the animation is only played once
                } else if (this.isHurt() && this.world.collidedEnemyType === 'jellyfish') {
                    this.playAnimation(this.IMAGES_ELECTRICSHOCK);
                    deadAnimationPlayed = false;
                } else if (this.isHurt() && this.world.collidedEnemyType === 'pufferfish') {
                    this.playAnimation(this.IMAGES_POISONED);
                    deadAnimationPlayed = false;
                } else if (this.isAlive() && (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN)) {
                    this.playAnimation(this.IMAGES_SWIMM);
                    deadAnimationPlayed = false;
                }
            }, 80);
        }

    
        /**
        * Initiates the attack animation when the SPACE key is pressed.
        * The attack animation consists of playing a sequence of images from the IMAGES_ATTACK array.
        * This function checks if the SPACE key is pressed, if the character's x position is within the level boundary,
        * and if the character is not currently attacking. If all conditions are met, it sets the isAttacking flag to true,
        * starts the attack animation, and sets the flag to false when the animation completes.
        */
        attack() {
            if (this.isAlive() && this.world.keyboard.SPACE && this.x < this.world.level.level_end_x && !this.isAttacking) {
                this.isAttacking = true; 
                const animationInterval = 200 / this.IMAGES_ATTACK.length; // Interval between each frame    
                let currentIndex = 0;
                const animationIntervalId = setInterval(() => {
                    this.playAnimation([this.IMAGES_ATTACK[currentIndex]]); 
                    currentIndex++;    
                    if (currentIndex >= this.IMAGES_ATTACK.length) {
                        clearInterval(animationIntervalId); 
                        this.isAttacking = false;  
                    }
                }, animationInterval);            
            } 
        }  
        
        /**
        * Initiates the attack animation when the D key is pressed.
        * The attack animation consists of playing a sequence of images from the IMAGES_ATTACK_FINALENEMY array.
        * This function checks if the D key is pressed, if the character's x position is within the level boundary,
        * and if the character is not currently attacking. If all conditions are met, it sets the isAttacking flag to true,
        * starts the attack animation, and sets the flag to false when the animation completes.
        */
        attackFinalEnemy(){
            if (this.isAlive() && this.world.keyboard.D && this.x < this.world.level.level_end_x && !this.isAttacking) {
                this.isAttacking = true; 
        
                const animationInterval = 200 / this.IMAGES_ATTACK_FINALENEMY.length; // Interval between each frame    
                let currentIndex = 0;
                const animationIntervalId = setInterval(() => {
                    this.playAnimation([this.IMAGES_ATTACK_FINALENEMY[currentIndex]]); 
                        currentIndex++;    
                        if (currentIndex >= this.IMAGES_ATTACK_FINALENEMY.length) {
                            clearInterval(animationIntervalId); 
                            this.isAttacking = false;  
                            }
                        }, animationInterval);            
            } 
        } 
            
        /**
        * Checks if the character is alive.
        * @returns {boolean} True if the character's energy is greater than 0, otherwise false.
        */
        isAlive() {
            return this.energy > 0;   
        }

        /**
        * Checks the character's status and updates the game state accordingly.
        * If the character is dead and the coin status bar is not zero, it decreases the coin percentage and shows the try again screen.
        * If the coin status bar is zero, it shows the start screen.
        */
        checkCharacterStatus() {            
            if (this.isDead() && !this.hasDecreasedPercentage) {
                if (!this.world.statusBarCoin.isZero()) {
                    this.world.statusBarCoin.decreasePercentage(20);
                    this.hasDecreasedPercentage = true;    
                    showTryAgainScreen();                                                  
                } else {
                    showStartScreen();                             
                }    
            }
        }

    }


