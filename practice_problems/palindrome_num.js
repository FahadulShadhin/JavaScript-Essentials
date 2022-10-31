const x = -121;

const reverseNum = function(x) {    
    let temp = 0;
    if (x >= 0) {
        while (x != 0) {
            temp = (temp*10) + (x%10);
            x = Math.floor(x/10);
        }
    }
    return temp;
};

const isPalindrome = function(x, y) {
    if(x === y) return true;
    else return false;
};

console.log(
    isPalindrome(x, reverseNum(x))
);
