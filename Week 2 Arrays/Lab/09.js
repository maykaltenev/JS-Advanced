
function solve(input) {


    let result = input
        .reduce((a, c) => a.concat(c))
        .sort((a, b) => a - b)
        .pop(0);

    console.log(result);
}
solve([[20, 50, 10],
[8, 33, 145]])