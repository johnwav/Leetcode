/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let n = nums.length
    const result = new Array(n).fill(1)
    let leftProduct = 1
    for (let i = 0; i < n; i++) {
        result[i] = result[i] * leftProduct
        leftProduct = leftProduct * nums[i]
    }
    let rightProduct = 1
    for (let i = n - 1; i >= 0; i--) {
        result[i] = result[i] * rightProduct
        rightProduct = rightProduct * nums[i]
    }

    return result
};