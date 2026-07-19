// 18. Delete the node at given position in doubly linked list
/**
 * Pattern Used: In-place Pointer Rewiring
 * Why this pattern: After traversing to the target node, its prev and next neighbors are rewired to point at each other directly, bypassing the removed node in both directions.
 *
 * Interview Scenario:
 * "A common LRU-cache-style interview sub-problem: removing an arbitrary node from a doubly linked list in O(1) once you already hold a reference to it."
 *
 * Example:
 *   Input:  list: null<-1<->2<->3<->4->null, deleteAtPosition(index=2)
 *   Output: null<-1<->2<->4->null
 */
