function solve(num) {
    let numString = String(num);
    let isSame = true;
    let sum = numString.length > 0 ? Number(numString[0]) : 0;
    for (let i = 0; i < numString.length - 1; i++) {
        let element = Number(numString[i]);
        let nextElement = Number(numString[i + 1]);
        if (element !== nextElement) {
            isSame = false;

        }
        sum += nextElement;
    }
    console.log(isSame);
    console.log(sum);
}

solve(1234)