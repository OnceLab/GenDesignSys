// Picker

const layerConstructors = [
    {
        name: 'Outline Shape',
        init: () => new OutlineShape(),
        weight: 0.6
    },
    {
        name: 'Centered Shape',
        init: () => new CenterShape(),
        weight: 0.6
    },
    {
        name: 'Circles',
        init: () => new Circles(),
        weight: 0.3
    },
    {
        name: 'Simple Lines',
        init: () => new SimpleLines(),
        weight: 0.3
    },
    {
        name: 'Dotted Lines',
        init: () => new DottedLines(),
        weight: 0.3
    },
    {
        name: 'Ring of Shapes',
        init: () => new RingOfShapes(),
        weight: 0.3
    },
    {
        name: 'Multi Polymers',
        init: () => new MultiPolymers(),
        weight: 0.7
    }
]

class Crystal {
    constructor(posX, posY) {
        this.x = posX;
        this.y = posY
        this.layers = []

        layerConstructors.forEach(lcon => {
            let picker = random(1);
            if (picker > lcon.weight) {
                this.layers.push(lcon.init());
            }
        })
        //console.log(this.layers)
    }

    render() {
        push();
        translate(this.x, this.y);
        this.layers.forEach(layer => {
                layer.render();
            })
        pop();

    }
}