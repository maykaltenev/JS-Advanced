
function solve(...params) {

    let occurrences = {};
    let result = [];

    for (const el of params) {
        let type = typeof (el);
        result.push(`${type}: ${el}`)
        occurrences[type] = occurrences[type] !== undefined
            ? occurrences[type] + 1
            : 1;
        result.push(`${type}: ${el}`)
    }

    Object.keys(occurrences)
        .sort((a, b) => occurrences[b] - occurrences[a])
        .forEach(key => result.push(`${key} = ${occurrences[key]}`));

    console.log(result.join('\n'));
}

solve('cat', 42, function () { console.log('Hello world!'); });



