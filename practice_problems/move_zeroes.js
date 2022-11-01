// https://leetcode.com/problems/move-zeroes/ 

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
    let pos = 0;
    
    for(let i in nums) {
        if(nums[i] !== 0) {
            nums[pos] = nums[i];
            pos++;
        }
    }
    for(let i=pos; i<nums.length; i++) nums[i] = 0;
}; 

const nums = [1, 0, 2, 3, 0, 0, 5, 4, 9];
moveZeroes(nums);
console.log(nums);