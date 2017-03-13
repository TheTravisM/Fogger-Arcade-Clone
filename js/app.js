// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    this.sprite = 'images/enemy-bug.png';

    // TODO: #2 Set the Enemy initial location
    this.x = 10;
    this.y = 10;
    // TODO: #3 Set the Enemy speed

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // TODO: #4 Updates the Enemy location

    // TODO: #5 Handles collision with the Player
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// -- [Player] -- /
// -- [ Now write your own player class
var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';

    // TODO: #7 Setting the Player initial location
    this.y = 380;
    this.x = 200;
};

// This class requires an update(),
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Player Class render()
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Player Class handleInput() method.
Player.prototype.handleInput = function(key) {

};

// Now instantiate your objects.
var player = new Player();

// Place all enemy objects in an array called allEnemies
// TODO: #14 Creating several new Enemies objects and placing them in an array called allEnemies
var allEnemies = [];
var enemy = new Enemy();

// Place the player object in a variable called player


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
      37: 'left',  // Left Arrow
      65: 'left',  // A
      38: 'up',    // Up Arrow
      87: 'up',    // W
      39: 'right', // Right Arrow
      68: 'right', // D
      40: 'down',  // Down Arrow
      83: 'down'   // S
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
