function solve(numArr) {


    let resultArr = aggregate(numArr, reducer, []);


    function reducer(acc, el) {
        if (acc.length === 0 || acc[acc.length - 1] <= el) {
            acc.push(el)
        }
        return acc;
    }
    function aggregate(arr, reducerFunction, initialValue) {
        for (let i = 0; i < arr.length; i++) {
            const el = arr[i];
            initialValue = reducerFunction(initialValue, el)
        }
        return initialValue;
    }
    return resultArr;

}



console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));