// 36. Delete the node at given position in the doubly circular linked list
/**
 * Pattern Used: In-place Pointer Rewiring
 * Why this pattern: After locating the target node, its prev and next neighbors are directly rewired to reference each other, bypassing the removed node while preserving the circular, bidirectional chain.
 *
 * Interview Scenario:
 * "A common follow-up to the LRU cache doubly linked list question, extended to a circular structure."
 *
 * Example:
 *   Input:  circular list: 1<->2<->3<->4<->(back to 1, doubly), deleteAtPosition(index=2)
 *   Output: circular list: 1<->2<->4<->(back to 1, doubly)
 */
