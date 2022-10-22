function insertionSort (inputArr) {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key;
    }
    return inputArr;
};

    let inputArr = [2,4,5,36,2,6,26,8,3,7]; // I want here user input which comes from html form instead of hard-coding elements of array like this
    insertionSort(inputArr);
    // console.log(inputArr);