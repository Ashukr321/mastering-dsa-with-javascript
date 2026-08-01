
const arr = [1, 1, 2, 2, 3, 4, 4];

const removeDuplicate = (arr) => {
    let left = 0;
    for (let right = 1; right < arr.length; right++) {

        // if the left index and right index value are different then only do , 
        if (arr[right] !== arr[left]) {
            left++;
            arr[left] = arr[right];
        }
        // else do nothing , just move the right pointer 
    }

    // here left is the  number of unique element; 
    return arr.slice(0, left + 1);
}

console.log(removeDuplicate(arr)); //t(c) = o(n);

// array slice methods :  help to give the sub array ;
// start index , endIndex , return endIndex-1;
// slice methods is the non mutating methods ; it return the new array
//  if we pass only start index then it return all element
// if we don't pass any argument then it copy the array
// if we pass the negative index then it return from last element ;

