// 4. Delete the node at begin of the singly linked list
/**
 * Pattern Used: In-place Pointer Rewiring
 * Why this pattern: Deleting the head is an O(1) rewire: move the head reference to head.next and let the old head be garbage collected — no traversal is required.
 *
 * Interview Scenario:
 * "A quick sanity check at interviews to confirm the candidate does not forget to null out or lose the reference to the old head before reassigning."
 *
 * Example:
 *   Input:  list: 1 -> 2 -> 3 -> null, deleteAtBegin()
 *   Output: 2 -> 3 -> null
 */
