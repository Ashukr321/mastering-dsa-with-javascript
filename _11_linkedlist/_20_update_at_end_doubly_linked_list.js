// 20. Update the node at end of the doubly linked list
/**
 * Pattern Used: Iterative Traversal
 * Why this pattern: Because the tail is reachable directly (or via one backward step from a tail pointer), updating its value is an O(1)/O(n) traversal followed by a plain data mutation, with no pointer rewiring.
 *
 * Interview Scenario:
 * "Tests whether candidates leverage the doubly linked list's tail-adjacent prev pointer instead of walking the whole list from head."
 *
 * Example:
 *   Input:  list: null<-1<->2<->3->null, updateAtEnd(9)
 *   Output: null<-1<->2<->9->null
 */
