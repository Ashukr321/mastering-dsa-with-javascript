// 23. Insert the node at end of the singly circular linked list
/**
 * Pattern Used: In-place Pointer Rewiring
 * Why this pattern: Appending requires traversing until the node whose next points back to head, then rewiring that node's next to the new node and the new node's next back to head to preserve circularity.
 *
 * Interview Scenario:
 * "Used to test whether candidates detect 'end of list' correctly in a circular structure, where the loop-terminating condition is node.next === head instead of node.next === null."
 *
 * Example:
 *   Input:  circular list: 1 -> 2 -> (back to 1), insertAtEnd(3)
 *   Output: circular list: 1 -> 2 -> 3 -> (back to 1)
 */
