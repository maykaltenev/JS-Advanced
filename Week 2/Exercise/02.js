function solve(inputArr,step){
    let resultArr = [];
    for(let i = 0; i < inputArr.length; i += step){
        resultArr.push(inputArr[i]);
    }

    return resultArr;
}