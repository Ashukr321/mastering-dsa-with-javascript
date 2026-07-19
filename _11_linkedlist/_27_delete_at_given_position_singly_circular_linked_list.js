// 27. Delete the node at given position in the singly circular linked list
/**
 * Pattern Used: In-place Pointer Rewiring
 * Why this pattern: Two Pointer Traversal reaches the node before the target index, then its next pointer is rewired to bypass (skip) the removed node, keeping the circular link intact.
 *
 * Interview Scenario:
 * "A step up from the linear-list delete-at-position question, testing safe loop bounds so the traversal correctly stops after one full pass."
 *
 * Example:
 *   Input:  circular list: 1 -> 2 -> 3 -> 4 -> (back to 1), deleteAtPosition(index=2)
 *   Output: circular list: 1 -> 2 -> 4 -> (back to 1)
 */
