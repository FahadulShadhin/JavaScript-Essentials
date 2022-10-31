// https://leetcode.com/problems/reverse-string/ 
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

function reverseString(s) {
    let i = 0, j = s.length-1;
    
    while(i <= j) {
        let leftval = s[i], rightval = s[j];
        s[i] = rightval;
        s[j] = leftval;
        
        i++;
        j--;
    }
};

const s = ['H', 'e', 'l', 'l', 'o'];
reverseString(s);
console.log(s);
