// 33. Insert the node at given position in the doubly circular linked list
/**
 * Pattern Used: In-place Pointer Rewiring
 * Why this pattern: Traversal (choosing the shorter direction thanks to the doubly circular structure) locates the target index, then next/prev pointers on the new node and its two neighbors are rewired to splice it in.
 *
 * Interview Scenario:
 * "A senior-level pointer manipulation question combining every complexity of linked lists: circularity, bidirectionality, and positional insertion."
 *
 * Example:
 *   Input:  circular list: 1<->2<->4<->(back to 1, doubly), insertAtPosition(3, index=2)
 *   Output: circular list: 1<->2<->3<->4<->(back to 1, doubly)
 */
