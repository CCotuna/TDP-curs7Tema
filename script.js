let table = [];

function setup() {
    createCanvas(500,500);
    background('red');

    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8 ;j++){
            let x = j * 60 + 50;
            let y = i * 60 + 50;
            let box = new Square(x, y, 50, 'red');
            table.push(box); 
        }
    }
}

class Square {
    constructor(x, y, size, color){
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }
}