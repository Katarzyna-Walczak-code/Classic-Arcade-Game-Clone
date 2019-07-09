const gameScore = document.querySelector('.score');

//Gems our player can get to score more points
var Gems = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/Gem Orange.png';
};

Gems.prototype.update = function(dt) {
    if ((player.x <= this.x + 35 && player.x >= this.x - 35) && (player.y <= this.y + 35 && player.y >= this.y - 35)) {
        this.x = 0;
        this.y = 450;
        gameScore.innerHTML = 1;
    }
};

Gems.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x = this.x + (this.speed*dt);
    if (this.x >= 500) {
        this.x = -100;
    }
    if ((player.x <= this.x + 35 && player.x >= this.x - 35) && (player.y <= this.y + 35 && player.y >= this.y - 35)) {
        player.x = 200;
        player.y = 385;
        gem.x = 200;
        gem.y = 100;
        gameScore.innerHTML = 0;
    }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var myPlayer = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};

myPlayer.prototype.update = function(dt) {
    if (this.y === -15) {
        setTimeout(function() {
            window.alert("Congratulations, you won!");
        }, 500);
    }
};

myPlayer.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

myPlayer.prototype.handleInput = function(allowedKeys) {
    if (allowedKeys === 'left' && this.x > 0) {
        this.x = this.x - 50;
    }
    else if (allowedKeys === 'right' && this.x < 400) {
        this.x = this.x + 50;
    }
    else if (allowedKeys === 'up' && this.y > 0) {
        this.y = this.y - 50;
    }
    else if (allowedKeys === 'down' && this.y < 385) {
        this.y = this.y + 50;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var enemy1 = new Enemy(-100, 140, 100);
var enemy2 = new Enemy(-300, 220, 100);
var enemy3 = new Enemy(0, 220, 100);
var enemy4 = new Enemy(100, 60, 100);
var player1 = new myPlayer (200, 385);
var gem1 = new Gems (200, 100);

var allEnemies = [enemy1, enemy2, enemy3, enemy4];
var player = player1;
var gem = gem1;

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
