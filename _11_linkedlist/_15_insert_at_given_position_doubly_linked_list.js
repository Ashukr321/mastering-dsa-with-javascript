// 15. Insert the node at given position in the doubly linked list
/**
 * Pattern Used: In-place Pointer Rewiring
 * Why this pattern: Traversal locates the node at the target position, then four pointers (new node's next/prev and the two neighbors' next/prev) are rewired to splice the node in while preserving both directions of traversal.
 *
 * Interview Scenario:
 * "A step up from the singly linked list version, used at interviews to check the candidate can manage four pointer updates correctly without breaking the list in either direction."
 *
 * Example:
 *   Input:  list: null<-1<->2<->4->null, insertAtPosition(3, index=2)
 *   Output: null<-1<->2<->3<->4->null
 */
