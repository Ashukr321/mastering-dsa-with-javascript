// 16. Delete the node at begin in doubly linked list
/**
 * Pattern Used: In-place Pointer Rewiring
 * Why this pattern: Removing the head means moving the head reference to head.next and setting that node's prev to null, an O(1) rewire enabled by the backward link.
 *
 * Interview Scenario:
 * "Used to confirm candidates remember to clear the new head's prev pointer, avoiding a dangling reference back to the removed node."
 *
 * Example:
 *   Input:  list: null<-1<->2<->3->null, deleteAtBegin()
 *   Output: null<-2<->3->null
 */
