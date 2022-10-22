function insertionSort(inputArr) {
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

let inputArr = [2, 4, 5, 36, 2, 6, 26, 8, 3, 7]; // I want here user input which comes from html form instead of hard-coding elements of array like this
insertionSort(inputArr);
// console.log(inputArr);

var A = [2, 1, 3, 4, 5];
var B = [];
var n = 5
var m = 12
big = -1;
for (i = 0; i <= n; i++) {
    sum = 0;
    for (j = i; j <= n; j++) {
        sum += A[j];
        if (sum < m) { B[i] = sum; continue; }//B[i] становится равным сумме
        if (sum > m) { B[i] = (sum - A[j]); break; }
        if (sum == m) {
            B[i] = sum //B[i] становится равным сумме 
            break;
        }
    }
    if (B[i] > big)
        big = B[i];
}

/// variant Two

// var A = [2, 1, 3, 4, 5];
//     var B = [];
//     var n = 5
//     var m = 12
//     big = -1;
//     for (i = 0; i <= n; i++) {
//         sum=0;
//         for (j = i; j <= n; j++) {
//             sum += A[j];
//             if (sum < m) { B[i] = sum; continue; }//B[i] становится равным сумме
//             if (sum > m) { B[i] = (sum - A[j]); break; }
//             if (sum == m) {
//               B[i] = sum //B[i] становится равным сумме 
//                 break;
//             }
//         }
//         if (B[i] > big)
//             big = B[i];
//     }
//     alert(big);