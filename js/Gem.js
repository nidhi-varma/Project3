/* Gem.js
 *   This file creates three different types of Gem which appear
 *   randomly on the paved road. Gems appear for a short duration and
 *   then they disappear. If a player is able to collect a gem, he will
 *   get lives based on the color of the gem.
 */

/*  GemTypes
 *   An array that stores images for three types of gems: orange, blue and green.
 */
var GemTypes = [
    'images/Gem Orange.png',
    'images/Gem Blue.png',
    'images/Gem Green.png'
];

var Gem = function() {
    this.reset();
};

/*  Gem.reset
 *   This function randomly generates one of the three types of gem and places
 *   it randomly in a row and column corresponding to one of the three paved rows.
 */

Gem.prototype.reset = function() {
    this.type = Math.floor(Math.random() * 3);
    this.row = Math.floor((Math.random() * 3 + 1));
    this.column = Math.floor(Math.random() * 5);
    this.sprite = GemTypes[this.type];
    this.live();
};

/* Gem.update
 *  This function is responsible for generating and removing a Gem upon expiry of
 *  certain amount of time. It is also responsible for checking collision with
 *  the player object.
 */

Gem.prototype.update = function(dt) {
    this.x = this.column * 101; // Convert grid column to x pixel location
    this.y = this.row * 83 - 23; // Convert grid row to y pixel location

    var now = Date.now();
    dt = (now - this.lastTime);
    if (dt > this.deltaTime) {
        if (!this.dead) {
            this.die();
        } else {
            this.reset();
        }
    }

    if (!this.dead) {
        player.isCollidingWithGem(this);
    }
};

/* Gem.die
 *
 *  This function must be called to remove a Gem when its life time
 *  has expired.
 *
 *  It updates the lastTime to indicate when the Gem died and also
 *  updates the deltaTime - the time after which the Gem shall be
 *  brought back to life.
 */

Gem.prototype.die = function() {
    this.deltaTime = Math.floor(Math.random() * 5000) + 2000;
    this.lastTime = Date.now();
    this.dead = 1;
};

/* Gem.live
 *
 *  This function must be called to re-generate a Gem when its death
 *  time has expired.
 *
 *  It updates the lastTime to indicate when the Gem became live and
 *  also updates the deltaTime - the time after which the Gem shall die.
 */

Gem.prototype.live = function() {
    this.deltaTime = Math.floor(Math.random() * 5000) + 2000;
    this.lastTime = Date.now();
    this.dead = 0;
};

/* Gem.render
 *   This function draws the Gem on the canvas.
 */

Gem.prototype.render = function() {
    if (!this.dead) {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
};
