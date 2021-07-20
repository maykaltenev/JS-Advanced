function solve(array) {
    let result = [];
    for (const num of array) {

        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }
    for (const num of result) {
        console.log(num);
    }
}
console.log(solve([7, -2, 8, 9]));