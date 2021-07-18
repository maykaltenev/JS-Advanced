
function solve(num) {

    let myNum = Number(num);

    for (let i = 1; i <= myNum; i++) {
        let line = '';
        for (let k = 1; k <= myNum; k++) {
            line += '* ';
        }
        console.log(line);
    }
}

console.log(solve(1));
console.log(solve(5));
console.log(solve(2));