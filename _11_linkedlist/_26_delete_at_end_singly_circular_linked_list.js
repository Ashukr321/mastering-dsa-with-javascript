// 26. Delete the node at end of the singly circular linked list
/**
 * Pattern Used: In-place Pointer Rewiring
 * Why this pattern: Deleting the last node requires traversing to the second-last node (the one whose next.next is head) and rewiring its next to point directly at head, preserving circularity.
 *
 * Interview Scenario:
 * "Used to check candidates can identify the 'last node' in a circular list, since there is no null terminator to stop at."
 *
 * Example:
 *   Input:  circular list: 1 -> 2 -> 3 -> (back to 1), deleteAtEnd()
 *   Output: circular list: 1 -> 2 -> (back to 1)
 */
