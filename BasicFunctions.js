function circle() {
    const numShapes = SIDES;
    const angle = 360 / SIDES;
    const shapeSize = (CRYSTAL_SIZE / 2) * random(0,0.95);
    const shapePosition = shapeSize / 2 * random(1, 1.5);
    const strokeColor = getRandomFromPalette();

    stroke(strokeColor);
    strokeWeight(1);
    noFill();

    push();
    translate(width/2, height/2);
    for (let i = 0; i < numShapes; i++) {
        ellipse(shapePosition, 0, shapeSize, shapeSize);
        rotate(angle);
    }
    pop();

}


function simpleLines() {
    // Determine the number of shapes
    let numShapes = randomSelectTwo() ? SIDES : SIDES * 2;

    // Determine the color
    const strokeColor = getRandomFromPalette();

    // Determine the stroke weight
    const weight = randomSelectTwo() ? 1 : 3;

    // Steps to outline
    const stepsOut = 8;
    const steps = randomSelectTwo() ? stepsOut : int(stepsOut * 1.25);
    const unitStep = (CRYSTAL_SIZE/2) / steps;
    const start = floor(random(0,steps));
    const end = floor(random(0,steps + 1));

    noFill();

    push();
    translate(width/2, height/2);
    stroke(PALETTE[0]);
    stroke(strokeColor);
    strokeWeight(weight);
    for (let i = 0; i < numShapes; i++) {
        line(start * unitStep, 0, end * unitStep, 0);
        rotate(360/numShapes);
    }
    pop();
}

function outlineShape() {
    const strokeColor = getRandomFromPalette();
    const weight = randomSelectTwo() ? 1 : 3;
    const hexganTrue = randomSelectTwo();

    stroke(strokeColor);
    strokeWeight(weight);


    push();
    translate(width/2, height/2);
    if (hexganTrue) {
        ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
    } else {
        Polymers(floor(random(3, 7)), 0, 0, CRYSTAL_SIZE / 2);
    }

    pop();
}