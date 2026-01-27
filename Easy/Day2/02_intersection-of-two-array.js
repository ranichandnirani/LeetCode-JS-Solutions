// problem 350: Intersection of two arrays.

var intersect = function(nums1, nums2) {
        
    // Decide which array is smaller to optimize space
    let smallArray = nums1;
    let bigArray = nums2;

    // Swap if nums1 is larger
    if (nums1.length > nums2.length) {
        smallArray = nums2;
        bigArray = nums1;
    }

    // Map to store frequency of elements from the smaller array
    const count = new Map();

    // Count occurrences of each number in smallArray
    for (let num of smallArray) {
        let currentCount = count.get(num);

        // If number is not present, initialize count to 0
        if (currentCount === undefined) {
            currentCount = 0;
        }

        // Increment count
        count.set(num, currentCount + 1);
    }

    // Array to store intersection result
    const res = [];

    // Traverse the larger array
    for (let num of bigArray) {
        let counts = count.get(num);

        // If number does not exist in map, treat count as 0
        if (counts === undefined) {
            counts = 0;
        }

        // If count is positive, it is part of intersection
        if (counts > 0) {
            res.push(num);              // Add to result
            count.set(num, counts - 1); // Decrease frequency
        }
    }

    // Return final intersection array
    return res;
};

// Test cases
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [9, 4]
console.log(intersect([1, 2, 2, 1], [2, 2]));      // [2, 2]
