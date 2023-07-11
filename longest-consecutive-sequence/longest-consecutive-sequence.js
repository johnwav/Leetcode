var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;

    let sortedNums = nums.sort((a, b) => a - b);
    let currentStreak = 1
    let res = 1



    for (i = 0; i < sortedNums.length; i++) {
        if (sortedNums[i] !== sortedNums[i - 1]) {
            if (sortedNums[i] === sortedNums[i - 1] + 1) {
                currentStreak++
            }
            else {
                res = Math.max(res, currentStreak)
                currentStreak = 1
            }
        }
    }

    return Math.max(res, currentStreak)


};
