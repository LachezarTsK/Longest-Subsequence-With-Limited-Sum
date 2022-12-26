
/**
 * @param {number[]} inputNumbers
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (inputNumbers, queries) {
    inputNumbers.sort((x, y) => x - y);
    for (let i = 1; i < inputNumbers.length; ++i) {
        inputNumbers[i] += inputNumbers[i - 1];
    }

    const maxSizeOfSubsequence = [];
    for (let i = 0; i < queries.length; ++i) {
        let indexMaxSum = binarySearch(inputNumbers, queries[i]);
        maxSizeOfSubsequence[i] = (indexMaxSum >= 0) ? indexMaxSum + 1 : ~indexMaxSum;
    }
    return maxSizeOfSubsequence;
};

function binarySearch(inputNumbers, numberToFind) {
    let left = 0;
    let right = inputNumbers.length;

    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);
        if (inputNumbers[middle] === numberToFind) {
            return middle;
        }
        if (inputNumbers[middle] < numberToFind) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return -left - 1; // (-(insertion index) - 1)
}
