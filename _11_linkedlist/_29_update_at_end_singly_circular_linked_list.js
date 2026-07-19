// 29. Update the node at end of the singly circular linked list
/**
 * Pattern Used: Iterative Traversal
 * Why this pattern: Updating the last node's value requires traversing until next points back to head (the circular 'end' condition), then mutating that node's data in place.
 *
 * Interview Scenario:
 * "Tests whether the candidate correctly identifies the terminating condition (next === head) rather than looking for a null."
 *
 * Example:
 *   Input:  circular list: 1 -> 2 -> 3 -> (back to 1), updateAtEnd(9)
 *   Output: circular list: 1 -> 2 -> 9 -> (back to 1)
 */
