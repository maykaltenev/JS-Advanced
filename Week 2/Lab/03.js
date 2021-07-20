function solve(array) {
    //shift
    let first = Number(array[0]);
    //pop
    let last = Number(array[array.length - 1]);
    let result = first + last;
    return result;
}
console.log(solve(['20', '30', '40']));