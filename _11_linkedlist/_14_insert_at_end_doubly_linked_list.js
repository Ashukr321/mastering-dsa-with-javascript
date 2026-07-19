// 14. Insert the node at end of the doubly linked list
/**
 * Pattern Used: In-place Pointer Rewiring
 * Why this pattern: Appending requires walking to the tail (or using a maintained tail reference) and rewiring the old tail's next and the new node's prev, keeping the backward chain consistent.
 *
 * Interview Scenario:
 * "A common follow-up to the singly-linked-list append question, testing whether the candidate correctly wires the prev pointer as well as next."
 *
 * Example:
 *   Input:  list: null<-1<->2->null, insertAtEnd(3)
 *   Output: null<-1<->2<->3->null
 */
