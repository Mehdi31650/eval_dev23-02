/*
// A1
// Initialisation
setPos(300, 300);
changeColor(color.red);
setLineWidth(10);
faceDown();

// Réalistaion
fortward(100);
faceRight();
forward(50)


// A2
// Initialisation

setPos(300, 300);
setLineWidth(10);

changeColor(color.red);
right(90);
forward(100);
left(90);
forward(100);
left(90);
forward(200);
left(90);
forward(200);


// A3
// Initialisation

setPos(300,300);
setLineWidth(10);
changeColor(color.yellow);
right(90);
forward(100);
backward(50);
right(90);
forward(50);
backward(50);
right(180);
forward(50);



// A4
// Initialisation

setPos(200,400);
setLineWidth(10);
changeColor(color.green);
faceRight();
forward(100);
arcLeft(60,180);
forward(40)
arcRight(60,180);
forward(100);



// A
// Initialisation

setPos(300,300);
setLineWidth(10);
changeColor(color.red);
faceRight();
arcRight(60,360);
arcRight(30,180);
arcLeft(30,180);


// B
// Initialisation

setPos(200,200);
faceRight;
setLineWidth(10);
changeColor(color.green);


for(let i = 0 ;  i < 4 ; i++) {
    forward(50);
    faceDown();
    forward(50);
    faceRight();
}



// B
// Initialisation

setPos(50,200);
faceUp();
setLineWidth(10);
changeColor(color.red);

for(let i = 0 ;  i < 5 ; i++) {
    forward(50);
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    faceRight();
    forward(50);
    faceUp();
}




// B
// Initialisation

setPos(200);
setLineWidth(10);
changeColor(color.red);
faceRight();

for(let i = 0 ;  i < 1 ; i++) {
    forward(100);
    faceDown();
    forward(100);
    faceLeft();
    forward(100);
    faceUp(50);
    forward(100);
}
    


// B4
// Initialisation

setPos(250,350);
setLineWidth(10);
changeColor(color.blue);
faceRight();

for(let i = 0 ;  i < 3 ; i++) {
    forward(100);
    left(120);
}
    


// B5
// Initialisation

setPos(250,50);
setLineWidth(10);
changeColor(color.red);
faceDown();

for(let i = 0 ;  i < 4 ; i++) {
    forward(100);
    left(120);
}
changeColor(color.green);
faceDown();
forward(400);





// B6
// Initialisation

setPos(20,300);
setLineWidth(10);
changeColor(color.red);
faceRight();

for(let i = 0 ;  i < 2 ; i++) {
    forward(50);
    left(90);
    forward(50);
    right(90);
}
changeColor (color.green)
for(let i = 0; i<4; i++) {
    forward (50);
    faceDown();
    forward(50);
    left(90);
    
}



// B7
// Initialisation

setPos(250,600);
setLineWidth(10);
changeColor(color.orange);
faceRight();

// Réalistaion
for(let i = 0 ;  i < 6 ; i++) {
    forward(50);
    left(90);
}
right(180);
for(let i = 0; i<3; i++) {
    left(120);
    forward(50);
}





// B8
// Initialisation

setPos(20,400);
setLineWidth(10);
changeColor(color.yellow);
faceRight();

for(let i = 0; i < 8; i++) {
    forward(200);
    left(135);
}




// B9
// Initialisation

setPos(10,100);
setLineWidth(10);
changeColor(color.fuchsia);
faceRight();
forward(100);
up();
forward(100);
down();

for (let i = 0; i < 3; i++) {
    forward(200);
    right(120);
}



// B10
// Initialisation

setPos(0,300);
setLineWidth(5);
changeColor(color.blue);
faceRight();

for(let i = 0; i < 8; i++) {
    forward(100);
    left(135);
}
up();
forward(400);
left(90)
forward(50)
down();
changeColor(color.yellow);


for(let i = 0; i < 8; i++) {
    forward(200);
    left(135);
}

up();
left(90);
forward(250);
left(90);
forward(100)
down();
changeColor(color.fuchsia);

for(let i = 0; i < 8; i++) {
    forward(100);
    left(135);
}


// C1

setPos(0,200);
setLineWidth(5);
changeColor(color.blue);
faceRight();
for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 3; j++) {
    forward(100);
    right(120);
    }
    forward(100)
}


// C2

setPos(300,590);
setLineWidth(5);
changeColor(color.fuchsia);
faceUp();
for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 4; j++) {
        forward(50);
        right(90);
    }
    up();
    forward(100);
    down();
}



// D15

//Initialisation

setPos(300,300);
setLineWidth(5);
changeColor(color.red);
faceDown();
let longueur;
let angle;

// Réalisation
longueur = 100;
angle = 90;
for (let i = 0; i < 10; i++){
    forward(longueur);
    left(angle);
    angle = angle - 5;
    longueur = longueur + 15;
}

*/

// Init Polygone

setPos(250,500);
setLineWidth(5);
shiftColor();
let longuer;
let angle;

// Réal
longueur = 100;
angle = 90;
for (let i = 0; i < 8; i++) {
    for (let i = 0; i < 8; i++) {
        forward(longueur);
        left(angle);
    }
    angle = angle + 30;
    longueur = longueur + 20;
    
}
