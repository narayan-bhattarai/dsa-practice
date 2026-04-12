var majorityElement = function(nums) {
    let count = 0;
    let candidate = null;
    
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
            count = 1;
        }
        else if (nums[i] == candidate) {
            count++;
        }
        else {
            count--;
        }
    }
    return candidate;
}


console.log(majorityElement([3,2,3]));                    // Output: 3
console.log(majorityElement([2,2,1,1,1,2,2]));           // Output: 2
console.log(majorityElement([1]));                        // Output: 1
console.log(majorityElement([1,1,1,1,2,2,2]));           // Output: 1
console.log(majorityElement([6,5,5,5,5,5,6]));           // Output: 5