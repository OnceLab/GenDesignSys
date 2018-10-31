const CRYSTAL_SIZE = 150;
const SIDES = 6;
let PALETTE = [];

const layers = []

const PADDING = CRYSTAL_SIZE * 0.3;
const GRIDBOX = PADDING + CRYSTAL_SIZE;
const COLUNMS = 3;
const ROWS = 3;
const MARGIN = CRYSTAL_SIZE / 2;

// IN ORDER TO LOSE EDGE
const START = CRYSTAL_SIZE / 1.5

let totalCrystals = []

function setup() {
	
    const totalX = GRIDBOX * COLUNMS + MARGIN;
    const totalY = GRIDBOX * ROWS + MARGIN
    createCanvas(totalX, totalY,SVG);
    noLoop();
    angleMode(DEGREES);
    rectMode(CENTER);

    PALETTE = [
        color(255, 52, 154), // pink
        color(4, 0, 152), // blue
    ]
}

function draw() {
	background(255);
    for (let x = 0; x < COLUNMS; x++) {
        for (let y = 0; y < ROWS; y++) {
            const posX = START + x * GRIDBOX;
            const posY = START + y * GRIDBOX;

            totalCrystals.push(new Crystal(posX, posY))
        }
    }
    for (let i = 0; i < totalCrystals.length; i++) {
        totalCrystals[i].render()
    }

    console.log(totalCrystals)

}









// Helper functions
function testLines() {

    // Determine the number of shapes
    let numShapes = randomSelectTwo() ? SIDES : SIDES * 2;

    // Determine the color
    const strokeColor = getRandomFromPalette();

    noFill();

    push();
    translate(width/2, height/2);
    stroke(PALETTE[0]);
    stroke(strokeColor);
    for (let i = 0; i < numShapes; i++) {
        line(0, 0, 0, CRYSTAL_SIZE/2);
        rotate(360/numShapes);
    }
    pop();
}

// 50% selector
function randomSelectTwo() {
    const RANDO = random(1);
    if (RANDO > 0.5) {
        return true;
    } else {
        return false;
    }
}

// Equal probability for every element selector
function getRandomFromPalette() {
    const RANDO_2 = floor(random(0,PALETTE.length));
    return PALETTE[RANDO_2];
}


// Regular polymers creator
function hexagan(posX, posY, radius) {
    const rotation = 360/6;
    beginShape();
        for(let i = 0; i < 6; i++) {
            let thisVertex = findPoints(posX, posY, radius, i * rotation);
            vertex(thisVertex.x, thisVertex.y);
        }
    endShape(CLOSE);
}

function Polymers(num,posX,posY,radius) {
    const rotation = 360/num;
    beginShape();
    let thisVertex;
    for(let i = 0; i < num; i++) {
        if (num == 3) {
            thisVertex = findPoints(posX, posY, radius, i * rotation - 30);
        } else {
            thisVertex = findPoints(posX, posY, radius, i * rotation);
        }
        vertex(thisVertex.x, thisVertex.y);
    }
    endShape(CLOSE);
}

function findPoints(posX, posY, radius, angle) {
    const x = posX + radius * cos(angle);
    const y = posY + radius * sin(angle);

    return createVector(x, y);
}

//  Copy and paste from Matt, just an easy rotation

function myTriangle (center, radius, direction) {
    if (direction) {
        beginShape();
        vertex(center + radius * cos(0), radius * sin(0));
        vertex(center + radius * cos(120), radius * sin(120));
        vertex(center + radius * cos(240), radius * sin(240));
        endShape(CLOSE);
    } else {
        beginShape();
        vertex(center + radius * cos(180), radius * sin(180));
        vertex(center + radius * cos(300), radius * sin(300));
        vertex(center + radius * cos(60), radius * sin(60));
        endShape(CLOSE);
    }
}
