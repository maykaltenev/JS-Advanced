function solve(input) {

    let sum = 1;
    let isEmpty = true;
    let current = 0;
    let result = [];
    for (let i = 0; i <= input.length; i++) {
        if (input[i] === 'add') {

            current += 1;
            result.push(current);
        } else if (input[i] === 'remove') {
        current -= current;
        result.push(current);
    }
}
if (result === undefined || result <= 0) {
    console.log('Empty');
    return;
} else {
    console.log(result.join('\n'));
}

}


solve(['add',
    'add',
    'add',
    'add']);
console.log('------');
solve(['add',
    'add',
    'remove',
    'add',
    'add'])
console.log('------');
solve(['remove',
    'remove',
    'remove']);
