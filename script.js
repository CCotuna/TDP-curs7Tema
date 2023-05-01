let table = [];

function setup() {
    noLoop();
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
                let squareObject = new Square(cols * 50 + 50, rows * 50 + 50, 50, c1);
                table.push(squareObject); 
            } else {
                let squareObject = new Square(cols * 50 + 50, rows * 50 + 50, 50, c2);
                table.push(squareObject); 
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

    let faces = [];


    let i = 0 ;
    while(i < 16){
        let index = Math.floor(random(table.length));
        let randomSquare = table[index];

        let X = randomSquare.x + randomSquare.size / 2;
        let Y = randomSquare.y + randomSquare.size / 2;


        if(i < 8){
            faces.push(new smileFace(X, Y, 30, 'red'));
        }
        else{
            faces.push(new smileFace(X, Y, 30, 'yellow'));
        }
        i++;
    }

    for(let face of faces){
        face.display();
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

class smileFace {
    constructor(x, y, diameter, color){
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.color = color;
    }

    display(){
        fill(this.color);
        circle(x, y, diameter);

        fill('black')
        circle(x + diameter*0.20, y - diameter*0.10, diameter*0.15);
        circle(x - diameter*0.20, y - diameter*0.10, diameter*0.15);

        fill('black');
         arc(x, y + diameter*0.30 , diameter*0.40, diameter*0.1, 0, Math.PI);
    }
}

// function smileFace(x, y, diameter, color){
//     fill(color);
//     circle(x, y, diameter);

//     fill('black')
//     circle(x + diameter*0.20, y - diameter*0.10, diameter*0.15);
//     circle(x - diameter*0.20, y - diameter*0.10, diameter*0.15);

//     fill('black');
//     arc(x, y + diameter*0.30 , diameter*0.40, diameter*0.1, 0, Math.PI);
// }