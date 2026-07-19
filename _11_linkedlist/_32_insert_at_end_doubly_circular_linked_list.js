// 32. Insert the node at end of the doubly circular linked list
/**
 * Pattern Used: In-place Pointer Rewiring
 * Why this pattern: Because the head's prev already points at the last node (circular + doubly), the tail is reached in O(1), and inserting after it only requires rewiring next/prev on three nodes.
 *
 * Interview Scenario:
 * "Tests whether candidates realize a doubly circular list gives O(1) access to the tail via head.prev, avoiding a full traversal."
 *
 * Example:
 *   Input:  circular list: 1<->2<->(back to 1, doubly), insertAtEnd(3)
 *   Output: circular list: 1<->2<->3<->(back to 1, doubly)
 */
