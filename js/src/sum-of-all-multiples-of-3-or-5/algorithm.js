function sumOfMultiplesOf(n, range) {
    const largestMultipleOfN = Math.floor(range / n);
    return n * largestMultipleOfN * (largestMultipleOfN + 1) / 2;
}

/**
 * Calculate the sum of all multiple of 3 or 5.
 *
 * @param {number} range
 * @returns {number}
 */
function findSum(range) {
    return sumOfMultiplesOf(3, range) + sumOfMultiplesOf(5, range) - sumOfMultiplesOf(15, range);
}

exports.findSum = findSum;