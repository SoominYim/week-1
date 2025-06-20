```markdown
26. Remove Duplicates from Sorted Array

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 

**Example 1:**

|Input: nums = [1,1,2]
|Output: 2, nums = [1,2,_]
|Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
|It does not matter what you leave beyond the returned k (hence they are underscores).
**Example 2:**

|Input: nums = [0,0,1,1,1,2,2,3,3,4]
|Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
|Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
|It does not matter what you leave beyond the returned k (hence they are underscores).
 

**Constraints:**

- 1 <= nums.length <= 3 * 104
- 100 <= nums[i] <= 100
- nums is sorted in non-decreasing order.

```;

/********************************************************************************************************************************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * comma operator를 사용
 * nums.splice안에서 nums value를 전부 제거 => filtering 된 unique한 값을 nums에 넣어줌
 * comma operator 마지막 값은 반환값이 되므로 최종적으로 변경된 nums.length를 반환해줌
 *
 * 시간 복잡도
 * filter + indexOf = O(n²)
 * splice = O(n)
 * 총합	O(n²)
 */

var removeDuplicates = nums => (
  nums.splice(0, nums.length, ...nums.filter((v, i) => nums.indexOf(v) === i)), nums.length
);

/**
 * 추가 학습 코드
 * two pointer, in-place 방식
 * 시간 복잡도
 * for = O(n)
 */
// var removeDuplicates = function(nums) {
//   if(nums.length === 0) return 0

//   let uniqeLength = 0

//   nums.forEach((_,i) => {
//     if(nums[i] !== nums[uniqeLength]) {
//       uniqeLength
//       nums[uniqeLength] = nums[i]
//     }
//   })

//   return uniqeLength+1
// };

// Example usage:
const nums = [1, 1, 2, 2, 3];
const newLength = removeDuplicates(nums);
console.log(newLength); // Output: 3
console.log(nums.slice(0, newLength)); // Output: [1, 2, 3]
