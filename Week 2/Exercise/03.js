function solve(input) {


    let isEmpty = true;
    let current = 1;
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'add') {
            result.push(i + 1);
        } else if (input[i] === 'remove') {
            result.pop(i - 1);
        }
    }
    if (result === undefined || result <= 0) {
        console.log('Empty');
        return;
    } else
        console.log(result.join('\n'));
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
