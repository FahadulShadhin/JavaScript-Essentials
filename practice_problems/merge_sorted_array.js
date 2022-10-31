// https://leetcode.com/problems/merge-sorted-array/ 

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 
function merge(nums1, m, nums2, n) {
    let index = nums1.length-1;
    m = m-1, n = n-1;
    
    while(m >= 0 && n >= 0) {
        if(nums1[m] <= nums2[n]) {
            nums1[index] = nums2[n];
            n--;
            index--;
        } else {
            nums1[index] = nums1[m];
            m--;
            index--;
        }
    }
    
    while( m>=0 ) {
        nums1[index] = nums1[m];
        m--;
        index--;
    }
    
    while(n >= 0) {
        nums1[index] = nums2[n];
        n--;
        index--;
    }
};

let nums1 = [1,2,3,0,0,0], m=3, nums2 = [2,5,6], n=3;
merge(nums1, m, nums2, n);
console.log(nums1);
