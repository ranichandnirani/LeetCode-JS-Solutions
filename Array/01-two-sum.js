/*
Problem 1: Two Sum


Approach:
- First, we store each number and its index in a hash (object) for fast lookup.
- Then, we check for each number if the "complement" (target - current number) exists in the hash.
- If the complement exists and is not the same element, we return the pair of indices.

Time Complexity: O(n)
Space Complexity: O(n)
*/

var twoSum = function(nums, target) {

    // Step 1: Create a hash object to store value -> index
    const hash = {};

    // Step 2: Populate the hash with all numbers in the array
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        hash[val] = i; // store index of each number
    }

    // Step 3: Loop through the array again to find the pair
    for (let i = 0; i < nums.length; i++) {
        let potentialKey = target - nums[i]; // number needed to reach target

        // Step 4: Check if this number exists in the hash and is not the same element
        if (hash[potentialKey] !== undefined && hash[potentialKey] !== i) {
            return [i, hash[potentialKey]]; // return indices
        }
    }
};

// Test example

const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum(nums, target);
console.log("Two Sum indices:", result);  // Output should be [0, 1]