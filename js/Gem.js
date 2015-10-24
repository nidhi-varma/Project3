/* Gem.js
*   This file creates three different types of Gem which appear
*   randomly on the paved road. Gems appear for a short duration and
*   then they disappear. If a player is able to collect a gem, he will
*   get lives based on the color of the gem.
*/

/*
*   Creates three gem of orange, blue and green color
*/
var GemTypes = [
    'images/Gem Orange.png',
    'images/Gem Blue.png',
    'images/Gem Green.png'
];
var Gem = function() {
    this.reset();
};

/* Gem.reset
*   This function randomly generate a gem
*/

Gem.prototype.reset = function() {
    this.type = Math.floor(Math.random() * 3);
    this.row = Math.floor((Math.random() * 3 + 1));
    this.column = Math.floor(Math.random() * 5);
    this.sprite = GemTypes[this.type];
    this.live();
};

/* Gem.update
*   this function generate and disappear gem after certain time. It also checks if a player collects
    it or not.
*/

Gem.prototype.update = function(dt) {
    this.x = this.column * 101;
    this.y = this.row * 83 - 23;

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
*   After certain time Gem disappears(die) from the paved rows.
*/

Gem.prototype.die = function() {
    this.deltaTime = Math.floor(Math.random() * 5000) + 2000;
    this.lastTime = Date.now();
    this.dead = 1;
};

/* Gem.live
*   After certain time Gem appear(live) again on the paved rows.
*/

Gem.prototype.live = function() {
    this.deltaTime = Math.floor(Math.random() * 5000) + 2000;
    this.lastTime = Date.now();
    this.dead = 0;
};

/* Gem.render
*   This function draws the Gem on the canvas
*/

Gem.prototype.render = function() {
    if (!this.dead) {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
};
