/*  app.js
 *
 *  This file has all the global definitions and objects.
 *  In this file enemies, player, gem and score objects are created.
 */

/*  allEnemies
 *   Instantiate and store all enemy objects in an array.
 *
 *   Each enemy is created with different values for:
 *      - the row in which enemy shall reside
 *      - the starting column (negative means off-the-grid)
 *      - the ending colunm (more than 5 means off-the-grid)
 *      - the speed with which to move
 */
var allEnemies = [
    new Enemy(1, -1, 5, 1),
    new Enemy(2, -2, 7, 1.5),
    new Enemy(3, -4, 6, 0.75),
    new Enemy(2, -3, 9, 0.5),
    new Enemy(1, -2, 8, 0.25),
    new Enemy(3, -2, 6, 0.5)
];

/*
 * Instantiate score, player and gem objects. The player object is
 * created with the home position for row and column.
 */
var score = new Score();
var player = new Player(5, 2);
var gem = new Gem();

/*
 * Add event listner for key press
 */
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
