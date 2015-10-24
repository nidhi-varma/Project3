/*
 * Score.js -   Implements the Score class that tracks and displays the scores
 *              associated with the game. There are two score variables: wins
 *              keeps track of number of games won by the player and lives tracks
 *              the number of lives a player has at any time.
 */

 /*
  * Score:constructor - This function sets the initial value of 3 for lives and 0 for wins
  */
var Score = function() {
    this.wins = 0;
    this.lives = 3;
};

/*
 * Score.won - This function is invoked upon a win. Every win gets a new life.
 */

Score.prototype.won = function() {
    this.wins++;
    this.lives++;
    this.display();
};

/*
 * Score.add -  This function updates the number of lives depending on the type
 *              of Gem acquired by the player.
 */
Score.prototype.add = function() {
    this.lives += gem.type + 1;
    this.display();
};

/*
 * Score.born - This function is called whenever a player is re-born and updates the
 *              number of lives.
 */
Score.prototype.born = function() {
    this.lives++;
    this.display();
};

/*
 * Score.die -  This function decreases the number of lives. When a player has no lives
 * left it displays a message in a modal dialog box
 */
 Score.prototype.die = function() {
    this.lives--;
    if (this.lives <= 0) {
        $("#gameOver").modal();
        this.lives = 3;
        this.wins = 0;
    }
    this.display();
};

/*
 * Score.display -  This function displays the score.
 */
Score.prototype.display = function() {
    $("#lives").text(this.lives);
    $("#wins").text(this.wins);
};
