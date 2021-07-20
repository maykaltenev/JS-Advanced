function even(inputArr) {
    let result = '';

    for (let index = 0; index < inputArr.length; index++) {
        if (index % 2 == 0) {
            result += inputArr[index];
            result += ' ';
        }
    }
    console.log(result);
}
even(['20', '30', '40', '50', '60']);