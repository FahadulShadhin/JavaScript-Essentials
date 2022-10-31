// https://leetcode.com/problems/product-of-array-except-self/ 

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function(nums) {
    const result = [];

    for(let i=0; i<nums.length; i++) result.push(1);
    // console.log(result);
    
    let pre = 1;
    for(let i=0; i<nums.length; i++) {
        result[i] = pre;
        pre *= nums[i];
    }
    
    let post = 1;
    for(let i=nums.length-1; i>=0; i--) {
        result[i] *= post;
        post *= nums[i];
    }
    
    return result;
};

const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));
