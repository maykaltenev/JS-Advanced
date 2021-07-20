function solve(input) {

    let reduced = input
        .sort((a, b) => a - b)
        .slice(0, 2)
        .join(' ');


    console.log(reduced);

}



solve([30, 15, 50, 5]);