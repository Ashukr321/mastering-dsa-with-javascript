
// palindrome : when  the number that reverse is also same 141  
// : read the same backwaard and forward 

function isPalindrome(num){
    if(num<0)return false;
    let originalNum = num;
    let reverseNum = 0;
    while(num>0){
        let digit = num %10;
        reverseNum = reverseNum * 10 + digit;
        num = Math.floor(num/10); // remove the last digit
    }
    return originalNum==reverseNum;
}

console.log(isPalindrome(122));// true or false


// alternate ways to revere the number 


function isPalindrome2(num){
    if(num<0)return false;
    let reverseNum = num.toString().split('').reverse().join('');
    return num.toString()==reverseNum;
}

console.log(isPalindrome2(121));

//using two pointer approach 
function isPalindrome3(num){
    // edge case 
    if(num<0)return false;
    let arr = num.toString().split('');
    let start =-0;
    let end = arr.length-1;
    while(start<end){
        if(arr[start]!==arr[end])return false;
        start++;
        end--;
    }
    return true;
}

console.log(isPalindrome3(121)); // true;

// normal approach  (*mathematical reverse logic)
// using inbuilt methods 
// two pointer approach : start and end pointer 

