/*Game*/

// game variables
minHeight = 30;
addedHeight = 60;
minWidth = 40;
addedwidth = 10;
minGap = 500;
maxGap = 800;
SpeedChange = 0;
jumpSpeedMulti = 0.9;
var canJump = true;
var myObstacles = [];

// Start function
function startGame() {
    gamearea.start();
}
// keeping track of interval
function everyinterval(n) {
    if (gamearea.frame % n == 0) return true;
    return false;
}
// setup game area
var gamearea = {
    canvas: document.createElement("canvas"),
    // setup game area at the start
    start: function () {
        this.canvas.height = 250;
        this.canvas.width = 800;
        var gameWindow = document.getElementById("game");
        gameWindow.insertBefore(this.canvas, gameWindow.childNodes[0]);
        this.context = this.canvas.getContext("2d");
        this.frame = 0;
        this.score = 0;
        score.update("Score: 0");
        this.interval = setInterval(this.updateGameArea, 16);
    },

    // uppdate game area
    updateGameArea: function () {
        // cheack if player has crashed
        for (i = 0; i < myObstacles.length; i++) {
            if (player.crash(myObstacles[i])) {
                gamearea.stop;
                return;
            }
        }

        // clear gamearea
        gamearea.clear();
        // every 80 interval adda new obstacle
        if (everyinterval(80)) {
            myObstacles.push(new obstacle());
            gamearea.frame = 0;
        }
        // move the obstacle and draw it  
        for (i = 0; i < myObstacles.length; i++) {
            myObstacles[i].x -= 5 + SpeedChange;
            if(myObstacles[i].x< -100){
                myObstacles.shift();
            }
            myObstacles[i].draw();
        }
        // update the position of the player
        player.newPos();
        player.update();

        // variable update
        gamearea.frame += 1;
        gamearea.score += 0.1;
        SpeedChange += 0.001;

        // score Update
        score.update("Score: " + Math.floor(gamearea.score));
    },
    // clear game area
    clear: function () {
        gamearea.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    // stop the game
    stop: function () {
        clearInterval(this.interval)
    }
}
// jump function
function jump() {
    player.jumpSpeed = -15;
}
//player object
var player = {
    x: 150,
    y: 250 - 30,
    width: 30,
    height: 30,
    jumpSpeed: 0,
    update: function () {
        gamearea.context.fillStyle = "red";
        gamearea.context.fillRect(this.x, this.y, this.width, this.height);
    },

    // position for jumping
    newPos: function () {
        if (this.jumpSpeed > -1 && this.jumpSpeed < 1) {
            this.jumpSpeed < -1
        }
        if (this.y < 80) {
            this.jumpSpeed = -5;
            this.jumpSpeed *= -1;
            jumpSpeedMulti = 1.1
        }
        if (this.jumpSpeed > 0 && this.y >= 250 - 30) {
            this.jumpSpeed = 0;
            if (this.jumpSpeed == 0) {
                canJump = true;
                jumpSpeedMulti = 0.9;
            }
        }
        if (this.jumpSpeed < -5) {
            this.jumpSpeed = this.jumpSpeed * jumpSpeedMulti;
        }
        this.y = this.y + this.jumpSpeed;

    },
    // crash cheack
    crash: function (obs) {
        if (this.x + this.width > obs.x - 3 - SpeedChange && this.x + this.width < obs.x + obs.width + this.height && this.y + this.height > obs.y) {
            return true;
        }
        return false;
    }
}
// obstacle object 
function obstacle() {
    this.height = minHeight + Math.random(4) * addedHeight;
    this.width = minWidth + Math.random(4) * addedwidth;
    this.x = 800;
    this.y = gamearea.canvas.height - this.height;
    this.draw = function () {
        gamearea.context.fillStyle = "black";
        gamearea.context.fillRect(this.x, this.y, this.width, this.height)
    }
}
// score object
var score = {
    x: 400,
    y: 50,
    update: function (text) {
        gamearea.context.fillStyle = "white";
        gamearea.context.font = "30px consolas";
        gamearea.context.fillText(text, this.x, this.y);
    }
}
// keep track of when "SPACE" is pressed
$(window).keypress(function (e) {
    if (e.which === 32 && canJump) {
        jump();
        canJump = false;
    }
});
// call statGame function
startGame();
