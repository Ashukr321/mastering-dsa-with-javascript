// 7. Update the node at begin of the singly linked list
/**
 * Pattern Used: Iterative Traversal (Direct Access)
 * Why this pattern: Updating the head's value requires no pointer rewiring at all — it is a direct O(1) mutation of head.data since the head reference is already available.
 *
 * Interview Scenario:
 * "A quick warm-up question interviewers use to distinguish 'value update' from 'structural update' (insert/delete) in a linked list."
 *
 * Example:
 *   Input:  list: 1 -> 2 -> 3 -> null, updateAtBegin(9)
 *   Output: 9 -> 2 -> 3 -> null
 */
