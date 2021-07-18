function solve(array){

    let sum = 0;
    let sum2 = 0;
    let concatResult = '';
    for (let i = 0; i < array.length; i++) {
        let currentItem = array[i];
        sum  += currentItem;
        concatResult += currentItem;
        sum2 += 1 / currentItem;
    }
    console.log(sum);
    console.log(sum2);
    console.log(concatResult);
}
console.log(solve(['1, 2, 3']));    



