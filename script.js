let table = [];

function setup() {
    createCanvas(500,500);
    background('#aaaaaa');

    let rows = 0;
    var c1 = 'white';
    var c2 = 'black';

    while(rows < 8){
        if(rows % 2 == 0){
            c1 = 'white';
            c2 = 'black';
        } else {
            c1 = 'black';
            c2 = 'white';
        }

        let cols = 0;
        while(cols < 8){
            if(cols % 2 == 0){
                let box = new Square(cols * 50 + 50, rows * 50 + 50, 50, c1);
                table.push(box); 
            } else {
                let box = new Square(cols * 50 + 50, rows * 50 + 50, 50, c2);
                table.push(box); 
            }
            cols += 1;
        }
        rows += 1;
    }

}

function draw(){
    for(let box of table){
        box.display();
    }
}

class Square {
    constructor(x, y, size, color){
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }

    display(){
        fill(this.color);
        square(this.x, this.y, this.size);
    }
}