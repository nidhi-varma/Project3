/*  Enemy.js
*   This class creates enemy who come to the three paved rows at the varying speed. It makes sure that
*   enemy stay with in the grid. As they reach the last column, they start again from the first column.
*   It also checks when a player collides with the enemy. 
*/

var Enemy = function(row, columnStart, columnEnd, speed) {
    this.sprite = 'images/enemy-bug.png';
    this.columnStart = columnStart;
    this.columnEnd = columnEnd;
    this.row = row;
    this.column = columnStart;
    this.y = this.row * 83 - 23;
    this.speed = speed;
};

/*  Enemy.update
*   This function makes sure that enemy stays within the canvas grid. When it
*   reaches the last column of the grid, it comes back to the first column
*   of the paved rows.
*/

Enemy.prototype.update = function(dt) {

    this.column += this.speed * dt * 2;
    if (this.column > this.columnEnd) {
        this.column = this.columnStart;
    }
    this.x = this.column * 101;
    player.isColliding(this);
};

/*  Enemy.render
*   This function draw the enemy on the screen
*/

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
