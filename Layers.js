// Layers OBJ

class Layer {
    constructor() {
        this.size = CRYSTAL_SIZE;
        this.sides = SIDES;
        this.numShapes = this.sides;
        this.angle = 360 / this.numShapes;
        this.stepsOut = 8;
        this.thinStorke = 1;
        this.thickStroke = 3;
        this.strokeColor = getRandomFromPalette();
        this.layerColor = getRandomFromPalette();
    }
}

class Circles extends Layer {
    constructor() {
        super();

        this.shapeSize = (CRYSTAL_SIZE / 2) * random(0,0.65);
        this.shapePosition = this.shapeSize / 2 * random(1, 2.5);
    }

    render() {
        stroke(this.strokeColor);
        strokeWeight(1);
        noFill();

        push();
        //translate(width/2, height/2);
        for (let i = 0; i < this.numShapes; i++) {
            ellipse(this.shapePosition, 0, this.shapeSize, this.shapeSize);
            rotate(360/this.numShapes);
        }
        pop();
    }
}


class SimpleLines extends Layer {
    constructor() {
        super();

        this.steps = randomSelectTwo() ? this.stepsOut : int(this.stepsOut * 1.25);
        this.unitStep = (CRYSTAL_SIZE/2) / this.steps;
        this.start = floor(random(0,this.steps));
        this.end = floor(random(0,this.steps + 1));

        this.numShapes = randomSelectTwo() ? SIDES : SIDES * 2;

        this.weight = randomSelectTwo() ? this.thickStroke : this.thinStorke;
    }

    render() {
        noFill();

        push();
            //translate(width/2, height/2);
            stroke(PALETTE[0]);
            stroke(this.strokeColor);
            strokeWeight(this.weight);
            for (let i = 0; i < this.numShapes; i++) {
                line(this.start * this.unitStep, 0, this.end * this.unitStep, 0);
                rotate(360/this.numShapes);
            }
        pop();
    }
}

class OutlineShape extends Layer {
    constructor() {
        super();
        this.weight = randomSelectTwo() ? this.thinStorke : this.thickStroke;
    }

    render() {
        stroke(this.strokeColor);
        strokeWeight(this.weight);


        push();
            //translate(width/2, height/2);
            if (randomSelectTwo()) {
                ellipse(0, 0, this.size, this.size);
            } else {
                Polymers(floor(random(3, 10)), 0, 0, this.size / 2);
            }
        pop();
    }
}

class DottedLines extends Layer {
    constructor() {
        super();
        this.dotNum = floor(random(5,11));
        this.steps = randomSelectTwo() ? this.stepsOut * 0.5 : int(this.stepsOut * 0.75);
        this.unitStep = (CRYSTAL_SIZE/4) / this.steps;
        this.sides = randomSelectTwo() ? this.sides : this.sides * 2;
        //console.log(this.sides);
    }

    render() {
        fill(this.layerColor);
        noStroke();

        push();
            //translate(width/2, height/2);
        for (let i = 0; i < this.sides; i++) {
            for (let n = 0; n < this.dotNum; n++) {
                rect(this.unitStep + this.unitStep * n, 0, 3, 3);
            }
            rotate(360/this.sides);
        }
        pop();
    }
}

class CenterShape extends Layer {
    constructor() {
        super();
        this.weight = randomSelectTwo() ? this.thinStorke : this.thickStroke;
        this.size = this.size * random(0.2, 0.6);
    }

    render() {
        stroke(this.strokeColor);
        strokeWeight(this.weight);
        //noStroke();
        fill(this.layerColor)

        push();
            //translate(width / 2, height / 2);
            if (randomSelectTwo()) {
                ellipse(0, 0, this.size, this.size);
            } else {
                Polymers(floor(random(3, 10)), 0, 0, this.size / 2);
            }
        pop();
    }
}

class RingOfShapes extends Layer {
    constructor() {
        super();
        this.rando = random(1);
        this.shapeSize = int(random(CRYSTAL_SIZE/20,CRYSTAL_SIZE/10));
        this.shapePosition = random(this.shapeSize * 1.5, this.size / 2 - this.shapeSize * 1.5);
        //console.log(this.shapeSize, this.shapePosition)
        this.fillTrue = randomSelectTwo();

        this.direction = randomSelectTwo();
    }

    render() {
        if (this.fillTrue) {
            noStroke();
            fill(this.layerColor);
        } else {
            stroke(this.layerColor);
            strokeWeight(randomSelectTwo()? this.thinStorke : this.thickStroke)
        }


        if (this.rando < 0.33) {
            push();
                //translate(width/2, height/2);
                for (let i = 0; i < this.sides; i++) {
                    ellipse(this.shapePosition, 0, this.shapeSize, this.shapeSize);
                    rotate(360/this.sides);
                }
            pop()
        } else if (0.33 < this.rando < 0.66) {
            push();
                //translate(width/2, height/2);
                for (let i = 0; i < this.sides; i++) {
                    rect(this.shapePosition, 0, this.shapeSize, this.shapeSize);
                    rotate(360/this.sides);
                }
            pop()

        } else {
            push();
                //translate(width/2, height/2);
                this.shapeSize = constrain(this.shapeSize, 10, 45);
                for (let i = 0; i < this.sides; i++) {
                    myTriangle(this.shapePosition, this.shapeSize, this.direction);
                    rotate(360/this.sides);
                }
            pop()
        }
    }
}
class MultiPolymers extends Layer {
    constructor() {
        super();
        this.basicRadius = CRYSTAL_SIZE/10;
        this.steps = randomSelectTwo() ? this.stepsOut * 0.5 : int(this.stepsOut * 0.75);
        this.unitStep = (CRYSTAL_SIZE/3) / this.steps;

        this.numOfSides = [4, 5, 6, 8, 9, 10];
        this.sides = this.numOfSides[int(random(0,6))];
    }


    render() {
        noFill();
        stroke(this.strokeColor);
        strokeWeight(randomSelectTwo()? this.thinStorke : this.thickStroke);

        push();
            //translate(width/2, height/2);
            for (let i = 0; i < this.sides; i++) {
                Polymers(this.sides,0,0,this.basicRadius);
                this.basicRadius += CRYSTAL_SIZE/20;
            }
        pop();
    }

}
