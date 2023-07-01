/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    var groups = {}
    for (i = 0; i < strs.length; i++) {
        const sortedStr = Array.from(strs[i]).sort().join("")
        if (groups[sortedStr]) groups[sortedStr].push(strs[i])
        else groups[sortedStr] = [strs[i]]
    }

    var res = Object.values(groups);

    return res;
};