// 37. Update the node at the begin in the doubly circular linked list
/**
 * Pattern Used: Iterative Traversal (Direct Access)
 * Why this pattern: Updating the head's value is an O(1) data mutation; none of the circular or bidirectional pointers are touched.
 *
 * Interview Scenario:
 * "Confirms candidates isolate value updates from structural changes even in the most complex list variant."
 *
 * Example:
 *   Input:  circular list: 1<->2<->3<->(back to 1, doubly), updateAtBegin(9)
 *   Output: circular list: 9<->2<->3<->(back to 9, doubly)
 */
