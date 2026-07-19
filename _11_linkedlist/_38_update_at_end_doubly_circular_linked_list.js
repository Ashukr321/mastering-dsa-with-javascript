// 38. Update the node at end of the doubly circular linked list
/**
 * Pattern Used: Iterative Traversal
 * Why this pattern: The last node is reached in O(1) via head.prev, and its data field is mutated directly with no pointer changes.
 *
 * Interview Scenario:
 * "Tests whether candidates exploit the head.prev shortcut instead of walking the entire circular list to find the tail."
 *
 * Example:
 *   Input:  circular list: 1<->2<->3<->(back to 1, doubly), updateAtEnd(9)
 *   Output: circular list: 1<->2<->9<->(back to 1, doubly)
 */
