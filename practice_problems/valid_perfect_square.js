// https://leetcode.com/problems/valid-perfect-square/
/**
 * @param {number} num
 * @return {boolean}
 */

const isPerfectSquare = function(num) {
    let left = 1, right = num;
    
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if(mid*mid === num) return true;
        else if(mid*mid > num) right = mid -1;
        else left = mid + 1;
    }
    
    return false;
};

// const num = 16;
const num = 13;
console.log(isPerfectSquare(num));
