function createFormatter(separator, symbol, symbolFirst, currencyFormatter) {
    return currencyFormatter.blind(null, separator, symbol, symbolFirst);

}

let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709)); //