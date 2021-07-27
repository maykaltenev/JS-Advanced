function solve(input) {
    let obj = {};
    for (const iterator of input) {
        let [townName, productName, priceName] = iterator.split(' | ');
        priceName = Number(priceName);
        obj[productName] ? obj[productName][townName] = priceName : obj[productName] = { [townName]: priceName };
    }
    for (const key in obj) {
        let sorted = Object.entries(obj[key]).sort((a, b) => a[1] - b[1]);
        if (obj !== undefined) {
            console.log(`${key} -> ${sorted[0][1]} (${sorted[0][0]})`);
        }
    }
}
solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);
