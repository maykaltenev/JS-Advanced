function solve(arr, sortOder) {

    return sortOder === 'asc'
        ? arr.sort((a, b) => a - b)
        : arr.sort((a, b) => b - a);

}