/*  Player.js
 *
 *   This file defines the player object. A Player can move up, down
 *   left or right with the arrow keys. Player stays with in the grid all
 *   the time. The goal of the player is to reach the water without colliding
 *   with any of the enemies. When player reaches the water, game is won and
 *   the score is updated. If player collides with the enemy, it dies.
 *   Score is updated and player comes back to the starting position. If a player
 *   collects Gem, score is updated based on the kind of the Gem collected.
 */

/*  Player constructor:
 *   This function sets the location of the player at starting position which are
 *   identified by rowStart and columnStart parameters.
 */
var Player = function(rowStart, columnStart) {

    this.sprite = 'images/char-boy.png';
    this.rowStart = rowStart;
    this.columnStart = columnStart;
    this.reset();
};

/*  Player.update
 *   This function checks if the player reaches the water. If player does, it updates
 *   the score and brings the player back to the initial position.
 */

Player.prototype.update = function(dt) {
    this.x = this.column * 101; // Convert grid column to x pixel location
    this.y = this.row * 83 - 13; // Convert grid row to y pixel location
    if (this.row === 0) {
        score.won();
        this.reset();
    }
};

/*  Player.isColliding
 *   This function checks if player collides with an enemy and
 *   if that's the case player dies and the score is updated.
 */

Player.prototype.isColliding = function(anEnemy) {
    if ((this.row === anEnemy.row) && (this.column === Math.floor(anEnemy.column))) {
        this.reset();
        score.die();
    }
};

/*  Player.isCollidingWithGem
 *   This function checks if player collides with gem and
 *   if that's the case score is updated and the gem is reset.
 */

Player.prototype.isCollidingWithGem = function(aGem) {
    if ((this.row === aGem.row) && (this.column === aGem.column)) {
        score.add();
        gem.reset();
    }
};

/*  Player.reset
 *   This function brings the player back to its initial position
 */

Player.prototype.reset = function() {
    this.row = this.rowStart;
    this.column = this.columnStart;
};

/*  Player.handleInput
 *   Player moves up, down, left or right with the arrow keys
 *   If the pressing of arrow keys would result in taking the player
 *   out of the grid then player does not move.
 */

Player.prototype.handleInput = function(key) {
    if (key === 'up') {
        this.row--;
    } else if (key === 'down') {
        this.row++;
    } else if (key === 'left') {
        this.column--;
    } else if (key === 'right') {
        this.column++;
    }

    if (this.column > 4) {
        this.column = 4;
    } else if (this.column < 0) {
        this.column = 0;
    }

    if (this.row > 5) {
        this.row = 5;
    } else if (this.row < 0) {
        this.row = 0;
    }
};

/*  Player.render
 *   This function draws the player on the screen
 */

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
