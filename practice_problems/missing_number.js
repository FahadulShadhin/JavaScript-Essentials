// https://leetcode.com/problems/missing-number/ 

/**
 * @param {number[]} nums
 * @return {number}
 */
 
var missingNumber = function(nums) {
    const n = nums.length;
    const expectedSum = n * (n+1) / 2;
    let sum = 0;

    for(let i in nums) {
        sum += nums[i];
    }
    
    return expectedSum - sum;
};

const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(missingNumber(nums));
