let table = [];

function setup() {
    createCanvas(500,500);
    background('red');
}

class Square {
    constructor(x, y, size, color){
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }
}