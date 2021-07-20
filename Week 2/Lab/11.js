function solve(input) {


    let count = 0;
    for (let row in input) {
        row = Number(row);

        for (let col in input[row]) {
            col = Number(col);
            if (row + 1 < input.length) {
                let a = input[row][col];
                let b = input[row + 1][col];
                if (input[row][col] == input[row + 1][col]) {
                    count++;
                }
            }
            if (col + 1 < input[row].length) {
                let a = input[row][col];
                let b = input[row][col + 1][col];
                if (input[row][col] == input[row[col + 1]]) {
                    count++;
                }
            }
        }
    }
    return count;
}