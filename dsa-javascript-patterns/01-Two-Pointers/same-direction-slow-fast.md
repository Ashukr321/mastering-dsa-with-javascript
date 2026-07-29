# two pointer : same direction 


## this approach  is , two pointer we have but both are in same direction 
## both pointer have different speed to move , slow fast pointer 
## this pattern help to reduce the time complexity to o^2 to n; 
## only move in same direction eg, left ---> right 
## 

When should you use it?

Use this pattern whenever the problem says:

Longest ...
Smallest ...
Continuous/Subarray
Window
At most K
Exactly K
Distinct characters
Remove duplicates
Partition
Compress array


1. Remove duplicate from sorted array 

[1,1,2,2,3,4,4]

``` 
function removeDuplicate (nums){
  let left = 0 ; 
  for(let right = 1 ; right < nums.length ; right ++){
    if(nums[right]!=nums[left]){
        left++;
        nums[left]=nums[right];
    }
  }
  return nums.slice(0,left+1);
}
```