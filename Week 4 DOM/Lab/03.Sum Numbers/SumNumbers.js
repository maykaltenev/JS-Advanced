function calc() {
    let numberOne = Number(document.getElementById('num1').value);
    let numberTwo = Number(document.getElementById('num2').value);

    let result = numberOne + numberTwo;

    document.getElementById('sum').value = result;
}
