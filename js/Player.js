/*  Player.js
*
/*

/*  Player
*   this function brings the image of the player at starting position
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
    this.x = this.column * 101;;
    this.y = this.row * 83 - 13;
    if (this.row === 0) {
        score.won();
        this.reset();
    }
};

/*  Player.isColliding
*   This function checks if player collides with an enemy and
*   if that's the case player comes back to the initial position and
*   score is updated.
*/

Player.prototype.isColliding = function(anEnemy) {
    if ((this.row === anEnemy.row) && (this.column === Math.floor(anEnemy.column))) {
        this.reset();
        score.die();
    }
};

/*  Player.isCollidingWithGem
*   This function checks if player collides with gem and
*   if that's the case score is updated
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
*   If with the arrow keys we try to take the player out of the grid,
*   player does not move.
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
*   This function draw the enemy on the screen
*/

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
