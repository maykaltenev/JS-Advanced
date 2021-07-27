function solve(text) {


    
    let words = text.toUpperCase()
        .split(/[\W]+/)
        .filter(x => x.length > 0)
        .join(", ");

    console.log(words);

}
console.log(solve('Hi, how are you?'));