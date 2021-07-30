function solve(area, vol, dataAsJSON) {
    const figures = JSON.parse(dataAsJSON);

    const result = [];

    for (const figure of figures) {

        const objArea = area.call(figure);
        const objVolume = vol.call(figure);

        const output = {
            area: objArea,
            volume: objVolume
        };
        result.push(output)

    }
    return result;
}

const example1 = `[
     
            {"x":"1","y":"2","z":"10"},
            {"x":"7","y":"7","z":"10"},
            {"x":"5","y":"2","z":"10"}
    ]`;

console.log(solve(area, vol, example1));

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};