# Nidhi's Frogger Game

This game is a variation of the popular Frogger game. It is played by one person who has to help the player cross a busy three lane highway of enemy vehicles to reach the water, without colliding with the enemies.

## Game Field Layout

Game board is arranged in a 5 X 6 grid. The grid has 2 green rows, 3 paved rows and 1 blue row.

* A player can safely roam around in the Green rows and the player is automatically placed in a Green row cell at the start of the game, as well as every time the player wins the game
* The Paved rows are where enemies are moving at varying speeds. Also, Gems appear in paved rows
* The Blue row (water) is where player has to reach to win a game.

## Basic Game Play

In the beginning, 3 lives are given to a player. If a player collides with an enemy, he losses one life. However, if the player successfully reaches the water, he gets an additional life.
The game continues until the player has no lives left. A modal is displayed when a player losses the game. If a player wishes, he can restart the game. 

## Navigating the Player

The player can be moved in four directions using the arrow keys:

* UP arrow key moves the player one grid location up
* DOWN arrow key moves the player one grid location down
* Left arrow key moves the player one grid location left
* Right arrow key moves the player one grid location right

## Gems

Gems of three colors appear at random in the grid for a short duration and then disappear. The player gets additional lives by collecting Gems:

* ORANGE Gem gives one extra life to player
* BLUE Gem gives two extra life to player
* GREEN Gem gives three extra life to player
