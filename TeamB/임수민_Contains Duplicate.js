/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = nums => nums.length !== new Set(nums).size;

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

// 실패 케이스 Time Limit Exceeded
// var containsDuplicate = nums => nums.some((v, i) => nums.indexOf(v) !== i);
//console.log(containsDuplicate([1, 2, 3, 4, ..., 99999]));
