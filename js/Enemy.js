/*  Enemy.js
 *   This class creates enemy that roams around the three paved rows
 *   at varying speed. It makes sure that
 *   enemy stays with in the grid. As they reach the last column, they start again from the first column.
 *   It also checks when a player collides with the enemy.
 */

/*  Enemy constructor function:
 *
 *   This function takes four parameters and initializes various instance variables:
 *
 *      - the row in which enemy shall reside
 *      - the starting column (negative means off-the-grid)
 *      - the ending colunm (more than 5 means off-the-grid)
 *      - the speed with which to movethe row number which tells where enemy will be moving
 *
 */

var Enemy = function(row, columnStart, columnEnd, speed) {
    this.sprite = 'images/enemy-bug.png';
    this.columnStart = columnStart;
    this.columnEnd = columnEnd;
    this.row = row;
    this.column = columnStart;
    this.y = this.row * 83 - 23;    // Convert grid row to y pixel location
    this.speed = speed;
};

/*  Enemy.update
 *   This function updates the location of the enemy to create the animation effect.
 *   It also makes sure that enemy stays within the specified bounds.
 *   When it reaches the last column of the grid, it comes back to the first
 *   column of the paved rows. Finally, this function checks for collision of
 *   enemy with the player.
 */

Enemy.prototype.update = function(dt) {

    this.column += this.speed * dt * 2;
    if (this.column > this.columnEnd) {
        this.column = this.columnStart;
    }
    this.x = this.column * 101;     // Convert grid column to x pixel location
    player.isColliding(this);
};

/*  Enemy.render
 *   This function draws the enemy on the screen
 */

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
