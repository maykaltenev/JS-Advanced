function solve(fruit, kg, money) {

    let product = fruit ;
    let weight = kg/ 1000;
    let price = weight * money;
    console.log(`I need $${price.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${product}.`)
}
console.log(solve('orange', 2500, 1.80));
console.log(solve('apple', 1563, 2.35));