function pairWithGivenDifference(list, diff) {
    let result = [];

    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if ((list[i] - list[j] === diff) || (list[j] - list[i] === diff))  {
                result = [list[i], list[j]];
            } 
        }
    }

    return result;
}

console.log(pairWithGivenDifference([5, 20, 3, 2, 50, 80], 78)); // [2, 80]