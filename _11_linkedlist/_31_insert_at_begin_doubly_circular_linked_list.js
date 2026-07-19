// 31. Insert the node at begin in the doubly circular linked list
/**
 * Pattern Used: In-place Pointer Rewiring
 * Why this pattern: Inserting at the head requires four pointer updates: the new node's next/prev, the old head's prev, and the last node's next — all while preserving both the circularity and the backward links.
 *
 * Interview Scenario:
 * "One of the trickiest pointer-rewiring interview questions: candidates must juggle both circular wrap-around and bidirectional links at once."
 *
 * Example:
 *   Input:  circular list: 2<->3<->(back to 2, doubly), insertAtBegin(1)
 *   Output: circular list: 1<->2<->3<->(back to 1, doubly)
 */
