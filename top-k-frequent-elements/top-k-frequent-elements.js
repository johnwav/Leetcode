/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    var hashmap = {}

    for (let i = 0; i < nums.length; i++) {
        if (hashmap[nums[i]]) hashmap[nums[i]] += 1
        else hashmap[nums[i]] = 1
    }

    var keys = Object.keys(hashmap).sort(function (a, b) {
        return hashmap[b] - hashmap[a];
    });
    var result = keys.slice(0, k);

    return result;
};
