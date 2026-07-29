const arr = [0, 1, 0, 3, 12];

// approach : copy non  zero then fill zero 

const moveZerosToEnd = (arr) => {
    let left = 0;
    for (let right = 0; right < arr.length; right++) {
        if (arr[right] !== 0) {
            arr[left] = arr[right];
            left++;
        }
    }

    while (left < arr.length) {
        arr[left] = 0;
        left++;
    }
    return arr; // array is reference so it directly mutate original array 
}


console.log(moveZerosToEnd(arr));