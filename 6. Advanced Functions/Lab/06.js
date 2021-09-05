function listProcessor(input) {
    let result = [];

    for (let line of input) {
        [command, text] = line.split(' ');

        if (command === 'add') {
            result.push(text);
        } else if (command === 'remove') {
            result = result.filter(e => e !== text);
        } else if (command === 'print') {
            console.log(result.join(','));
        }
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);