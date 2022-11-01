// https://leetcode.com/problems/guess-number-higher-or-lower/ 

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
 
var guessNumber = function(n) {
    let left = 1, right = n;
    
    while(left <= right) {
        let num = Math.floor((left + right) / 2);
        
        if(guess(num) === 0) return num;
        else if(guess(num) === -1) right = num - 1;
        else left = num + 1;
    }
};
