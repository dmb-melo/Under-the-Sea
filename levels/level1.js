const level1 = new level(

    /**
    * Array of enemies for the level.
    * 
    * @type {Array<Enemy>}
    * @description
    * This array contains instances of different enemy types that will be present in the level. 
    * It includes instances of `JellyFish`, instances of `PufferFish`, 
    * and one instance of `FinalEnemy`.
    */ 
    [
        new JellyFish(),
        new JellyFish(),
        new JellyFish(),
        new PufferFish(),
        new PufferFish(),
        new PufferFish(),
        new FinalEnemy()
    ],



/**
 * Array of background objects for the level.
 * 
 * @type {Array<BackgroundObject>}
 * @description
 * This array contains instances of `BackgroundObject` that define the background layers 
 * of the game level. Each `BackgroundObject` represents a specific layer of the background, 
 * such as water, floor, and light, and is positioned at various x-coordinates to create a 
 * scrolling effect. The images and positions are set to ensure that the background repeats 
 * seamlessly as the player moves through the level.
 */
    [
        new BackgroundObject('img/3. Background/Layers/5. Water/L2.png', -719),       
        new BackgroundObject("img/3. Background/Layers/4.Fondo 2/L2.png", -719),
        new BackgroundObject("img/3. Background/Layers/3.Fondo 1/D2.png", -719),       
        new BackgroundObject("img/3. Background/Layers/2. Floor/L2.png", -719),
        new BackgroundObject("img/3. Background/Layers/1. Light/2.png", -719),

        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 0),       
        new BackgroundObject("img/3. Background/Layers/4.Fondo 2/L1.png", 0),
        new BackgroundObject("img/3. Background/Layers/3.Fondo 1/D1.png", 0),       
        new BackgroundObject("img/3. Background/Layers/2. Floor/L1.png", 0),
        new BackgroundObject("img/3. Background/Layers/1. Light/1.png", 0),

        new BackgroundObject('img/3. Background/Layers/5. Water/L2.png', 719),       
        new BackgroundObject("img/3. Background/Layers/4.Fondo 2/L2.png", 719),
        new BackgroundObject("img/3. Background/Layers/3.Fondo 1/D2.png", 719),       
        new BackgroundObject("img/3. Background/Layers/2. Floor/L2.png", 719),
        new BackgroundObject("img/3. Background/Layers/1. Light/2.png", 719),

        new BackgroundObject('img/3. Background/Layers/5. Water/L2.png', 719*2),       
        new BackgroundObject("img/3. Background/Layers/4.Fondo 2/L2.png", 719*2),
        new BackgroundObject("img/3. Background/Layers/3.Fondo 1/D2.png", 719*2),       
        new BackgroundObject("img/3. Background/Layers/2. Floor/L2.png", 719*2),
        new BackgroundObject("img/3. Background/Layers/1. Light/2.png", 719*2),

        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 719*2),       
        new BackgroundObject("img/3. Background/Layers/4.Fondo 2/L1.png", 719*2),
        new BackgroundObject("img/3. Background/Layers/3.Fondo 1/D1.png", 719*2),       
        new BackgroundObject("img/3. Background/Layers/2. Floor/L1.png", 719*2),
        new BackgroundObject("img/3. Background/Layers/1. Light/1.png", 719*2),
    ],


    /**
    * Array of coin objects for the level.
    * 
    * @type {Array<Coin>}
    * @description
    * This array contains instances of `Coin` that are placed throughout the level. Each `Coin` 
    * object represents a collectible item that the player can collect to increase their score or 
    * progress. These coins are distributed in the level to encourage exploration and provide rewards 
    * for the player's efforts.
    */
    [
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),  
    ],

    /**
    * Array of poison objects for the level.
    * 
    * @type {Array<Poison>}
    * @description
    * This array contains instances of `Poison` that are placed throughout the level. Each `Poison` 
    * object represents a hazardous item that the player should avoid or interact with strategically. 
    * These poison objects are distributed in the level to add challenge and obstacles for the player 
    * to navigate and avoid.
    */
    [
        new Poison(),
        new Poison(),
        new Poison(),
        new Poison(),
        new Poison(),
        new Poison(),
        new Poison(),
        new Poison(),
        new Poison(),
    ],

);

