// 3. Insert the node at given position in the singly linked list
/**
 * Pattern Used: In-place Pointer Rewiring
 * Why this pattern: This combines Two Pointer Traversal (walking to the node just before the target index) with pointer rewiring, redirecting the previous node's next to the new node and the new node's next to the old successor.
 *
 * Interview Scenario:
 * "A classic Amazon SDE-1 question used to check boundary-handling: inserting at index 0, at the last index, and at an out-of-range index."
 *
 * Example:
 *   Input:  list: 1 -> 2 -> 4 -> null, insertAtPosition(3, index=2)
 *   Output: 1 -> 2 -> 3 -> 4 -> null
 */
