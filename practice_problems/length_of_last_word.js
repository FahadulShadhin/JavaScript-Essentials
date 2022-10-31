// https://leetcode.com/problems/length-of-last-word/ 

/**
 * @param {string} s
 * @return {number}
 */
 
var lengthOfLastWord = function(s) {
    let len = 0;
    
    for(let i in s) {
        if(s[i] != ' ') {
            if(s[i-1] == ' ') len = 1;
            else len += 1;
        }
    }
    return len;
};

// const s = "Hello World";
const s = "   fly me   to   the moon  ";
// const s = "aa ";
// const s = " aa";

console.log(lengthOfLastWord(s));
