// 17. Delete the node at end of the doubly linked list
/**
 * Pattern Used: In-place Pointer Rewiring
 * Why this pattern: Because each node has a prev pointer, the tail can be removed in O(1) by moving directly to tail.prev and setting its next to null — no forward traversal from head is needed, unlike a singly linked list.
 *
 * Interview Scenario:
 * "Interviewers use this to highlight the practical advantage of a doubly linked list: O(1) tail deletion versus O(n) for a singly linked list."
 *
 * Example:
 *   Input:  list: null<-1<->2<->3->null, deleteAtEnd()
 *   Output: null<-1<->2->null
 */
