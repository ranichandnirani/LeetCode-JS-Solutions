
// LeetCode Problem 2: Add Two Numbers
// Difficulty: Medium
// Concept: Linked List, Carry handling

var addTwoNumbers = function(l1, l2) {
    let carry = 0;

    // Dummy head node to simplify result list creation
    let res = new ListNode(-1);
    let final = res;

    // Loop until both lists and carry are finished
    while (l1 || l2 || carry) {

        // Get current values or 0 if node is null
        let l1Val = l1 ? l1.val : 0;
        let l2Val = l2 ? l2.val : 0;

        // Calculate digit to store
        let nextDigit = (l1Val + l2Val + carry) % 10;

        // Create next node with calculated digit
        res.next = new ListNode(nextDigit);
        res = res.next;

        // Update carry
        carry = Math.floor((l1Val + l2Val + carry) / 10);

        // Move to next nodes
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    // Return head of the result list (skip dummy node)
    return final.next;
};


// Simple Linked List node constructor for testing
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Input:
// l1 = 2 -> 4 -> 3
// l2 = 5 -> 6 -> 4
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

// Function call
let result = addTwoNumbers(l1, l2);

// Output should be: 7 -> 0 -> 8
while (result) {
    console.log(result.val);
    result = result.next;
}
