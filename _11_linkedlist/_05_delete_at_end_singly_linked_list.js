// 5. Delete the node at end of the singly linked list
/**
 * Pattern Used: In-place Pointer Rewiring
 * Why this pattern: Deleting the tail requires traversing to the second-last node and rewiring its next pointer to null, since a singly linked list cannot look backwards from the last node.
 *
 * Interview Scenario:
 * "Frequently used at Adobe/Amazon to test whether the candidate keeps a 'previous' pointer while walking, since the singly linked list offers no backward reference."
 *
 * Example:
 *   Input:  list: 1 -> 2 -> 3 -> null, deleteAtEnd()
 *   Output: 1 -> 2 -> null
 */
