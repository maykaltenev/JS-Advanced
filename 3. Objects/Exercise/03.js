function solve(input) {


    let storage = {
        engine: {
            "Small engine": { power: 90, volume: 1800 },
            "Normal engine": { power: 120, volume: 2400 },
            "Monster engine": { power: 200, volume: 3500 },
        },
        carriage: {
            hatchback: { type: "hatchback", color: "" },
            coupe: { type: "coupe", color: "" },
        },
        selectEngine(pow) {
            for (const eng in this.engine) {
                if (this.engine[eng].power >= pow) {
                    return this.engine[eng];
                }
            }
        },
        selectCarriage(carr, col) {
            let result = this.carriage[carr];
            result.color = col;
            return result;
        },
        selectWheels(size) {
            let resolved = size % 2 === 0 ? size - 1 : size;
            return [resolved, resolved, resolved, resolved];
        },
    };
    return {
        model: input.model,
        engine: storage.selectEngine(input.power),
        carriage: storage.selectCarriage(input.carriage, input.color),
        wheels: storage.selectWheels(input.wheelsize),
    };
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));