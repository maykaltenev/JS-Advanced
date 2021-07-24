function solve(num1,num2, operator){

    let result;

    switch(operator){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        case '**':
            result = num1 ** num2;
            break;
     
        
    }
    console.log(result);
}
console.log(solve(5, 6, '+'));
console.log(solve(5, 4, '-'));
console.log(solve(3, 5.5, '*'));
