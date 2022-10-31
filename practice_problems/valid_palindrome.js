// https://leetcode.com/problems/valid-palindrome/ 

/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    // replace all uppercase to lowercase and remove all non-alphanumeric characters 
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    let i = 0; j = s.length-1;
    
    while(i <= j) {
        if(s[i] != s[j]) return false;
        i++;
        j--;
    }
    return true;
};

const s = "A man, a plan, a canal: Panama";
// const s = "race a car";
// const s =  " ";
console.log(isPalindrome(s));