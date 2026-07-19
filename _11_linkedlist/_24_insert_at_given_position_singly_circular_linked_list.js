// 24. Insert the node at the given position in the singly circular linked list
/**
 * Pattern Used: In-place Pointer Rewiring
 * Why this pattern: Two Pointer Traversal locates the node before the target index (looping until head is reached again as the stop condition), then the new node is spliced in via a next-pointer rewire.
 *
 * Interview Scenario:
 * "Tests whether a candidate can adapt the standard 'insert at position' pattern to a circular list, correctly bounding the traversal so it doesn't loop forever."
 *
 * Example:
 *   Input:  circular list: 1 -> 2 -> 4 -> (back to 1), insertAtPosition(3, index=2)
 *   Output: circular list: 1 -> 2 -> 3 -> 4 -> (back to 1)
 */
