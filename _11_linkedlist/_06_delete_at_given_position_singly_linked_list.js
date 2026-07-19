// 6. Delete the node at given position in the singly linked list
/**
 * Pattern Used: In-place Pointer Rewiring
 * Why this pattern: Deletion at an arbitrary index uses Two Pointer Traversal to locate the node before the target, then rewires its next pointer to skip over (bypass) the node being removed.
 *
 * Interview Scenario:
 * "A very common whiteboard question to test pointer manipulation without extra memory: delete the k-th node given only the head reference."
 *
 * Example:
 *   Input:  list: 1 -> 2 -> 3 -> 4 -> null, deleteAtPosition(index=2)
 *   Output: 1 -> 2 -> 4 -> null
 */
