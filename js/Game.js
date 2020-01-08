/*Game*/
var WIDTH = 100
var HEIGHT = 150;

var time;
var tiles = [];

function setup() {
    createCanvas(401, 601);

    time = 0;
    tiles.push(0, 1, 1, 1);
    tiles.push(0, 1, 1, 1);
    tiles.push(0, 1, 1, 1);
    tiles.push(0, 1, 1, 1);
}

function draw() {
    background(51);


    for (var i = 0; i < tiles.length; i++) {
        var x = (i % 4) * WIDTH;
        var y = Math.floor(i / 4) * HEIGHT;

        fill((tiles[i] === 0) ? 0 : 255)
        rect(x, y, WIDTH, HEIGHT);
    }
}

function newRow() {


}