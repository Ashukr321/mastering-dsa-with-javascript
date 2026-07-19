// 28. Update the node at begin in the singly circular linked list
/**
 * Pattern Used: Iterative Traversal (Direct Access)
 * Why this pattern: Updating the head's value in a circular list is still a direct O(1) mutation of head.data — the circular next-pointer chain is untouched.
 *
 * Interview Scenario:
 * "Confirms candidates don't overcomplicate a value update in a circular structure by touching any pointers."
 *
 * Example:
 *   Input:  circular list: 1 -> 2 -> 3 -> (back to 1), updateAtBegin(9)
 *   Output: circular list: 9 -> 2 -> 3 -> (back to 9)
 */
