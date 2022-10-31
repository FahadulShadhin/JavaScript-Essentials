// https://leetcode.com/problems/contains-duplicate/ 

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
    const hmap = new Map();
    
    for(let i in nums) {
        if(hmap.has(nums[i])) return true;
        hmap.set(nums[i], i);
    }
    
    return false;
};

// const nums = [1, 2, 3, 4, 5, 1];
const nums = [1, 2, 3, 4, 5];

console.log(containsDuplicate(nums));
