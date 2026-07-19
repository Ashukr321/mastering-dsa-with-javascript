// 34. Delete the node the begin in the doubly circular linked list
/**
 * Pattern Used: In-place Pointer Rewiring
 * Why this pattern: Removing the head requires moving head to head.next, updating that node's prev, and rewiring the last node's next to point at the new head — keeping both the loop and backward links consistent.
 *
 * Interview Scenario:
 * "Used to test whether candidates handle the edge case of a single-node circular list correctly (where head, prev, and next should all resolve to the same node or become null)."
 *
 * Example:
 *   Input:  circular list: 1<->2<->3<->(back to 1, doubly), deleteAtBegin()
 *   Output: circular list: 2<->3<->(back to 2, doubly)
 */
