/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const S = Array.from(s).sort().join('');
    const T = Array.from(t).sort().join('');
    return S === T;
};