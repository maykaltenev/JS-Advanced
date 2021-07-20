function solve(input) {

    let result = []
    for (let i = 1; i < input.length; i += 2) {
        let current = input[i] * 2;
        result.push(current);
    }

   return result
        .reverse()
        .join(' ');
}
solve([10, 15, 20, 25]);

console.log(solve([3, 0, 10, 4, 7, 3]));