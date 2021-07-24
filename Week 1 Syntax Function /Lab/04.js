function solve(input) {

    if (typeof (input) !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(input)}.`);
        return;
    } else {
        let result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2));
    }
}
console.log(solve(5));
console.log(solve('name'));