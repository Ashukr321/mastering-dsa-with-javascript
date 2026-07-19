// 19. Update the node at begin in the doubly linked list
/**
 * Pattern Used: Iterative Traversal (Direct Access)
 * Why this pattern: Updating the head's value is a direct O(1) mutation of head.data — no next/prev pointers change since the structure itself is untouched.
 *
 * Interview Scenario:
 * "Used to confirm candidates don't confuse a value update with a structural (insert/delete) operation on a doubly linked list."
 *
 * Example:
 *   Input:  list: null<-1<->2<->3->null, updateAtBegin(9)
 *   Output: null<-9<->2<->3->null
 */
