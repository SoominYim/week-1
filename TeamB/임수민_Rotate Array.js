/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = (nums, k) => (nums.unshift(...nums.splice(nums.length - (k % nums.length))), nums);

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // result: [5, 6, 7, 1, 2, 3, 4]
console.log(rotate([1, 2], 5)); // result: [2, 1]

// 실패 케이스
// var rotate = (nums, k) => (nums.unshift(...nums.splice(nums.length - k)), nums);
// console.log(rotate([1, 2], 5)); // 예상 답 : [2,1] , 실제 값 [1,2]
