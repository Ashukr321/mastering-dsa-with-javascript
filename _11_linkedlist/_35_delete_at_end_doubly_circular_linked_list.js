// 35. Delete the node at the end of the doubly circular linked list
/**
 * Pattern Used: In-place Pointer Rewiring
 * Why this pattern: The last node is reached in O(1) via head.prev, so deletion only requires rewiring the new last node's next to head and head's prev to the new last node.
 *
 * Interview Scenario:
 * "Highlights the main advantage of a doubly circular list over a singly circular one: O(1) tail deletion without any traversal."
 *
 * Example:
 *   Input:  circular list: 1<->2<->3<->(back to 1, doubly), deleteAtEnd()
 *   Output: circular list: 1<->2<->(back to 1, doubly)
 */
