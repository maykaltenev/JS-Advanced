function solve(arr) {

    let map = new Map();

    for (let line of arr) {

        let split = line.split(' : ');
        let product = split[0];
        let price = split[1];
        map.set(product, price);
    }
    let group = new Set();
    Array.from(map.keys()).forEach(i => group.add(i[0]));
    for (let index of Array.from(group.keys()).sort()) {
        console.log(index);

        for (let index2 of Array.from(map.keys()).sort()) {
            if (index2.startsWith(index)) {
                if (index2 !== undefined) {
                    console.log(`${index2}: ${map.get(index2)}`);
                }
            }

        }
    }
}
console.log(solve(['Apricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']));