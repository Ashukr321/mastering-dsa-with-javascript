// 13. Insert the node at doubly linked list at begin
/**
 * Pattern Used: In-place Pointer Rewiring
 * Why this pattern: Inserting at the head of a doubly linked list requires rewiring both the new node's next (to the old head) and the old head's prev (back to the new node), an O(1) operation using the extra backward link.
 *
 * Interview Scenario:
 * "Asked to see if candidates remember doubly linked lists need twice the pointer updates of a singly linked list — missing the prev update is the classic bug interviewers look for."
 *
 * Example:
 *   Input:  list: null<-2<->3->null, insertAtBegin(1)
 *   Output: null<-1<->2<->3->null
 */
