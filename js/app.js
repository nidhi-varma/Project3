/* Instantiate and place all enemy objects in an array  */
var allEnemies = [
    new Enemy(1, -1, 5, 1),
    new Enemy(2, -2, 7, 1.5),
    new Enemy(3, -4, 6, 0.75),
    new Enemy(2, -3, 9, 0.5),
    new Enemy(1, -2, 8, 0.25),
    new Enemy(3, -2, 6, 0.5)
];

var score = new Score();
var player = new Player(5, 2);
var gem = new Gem();


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
