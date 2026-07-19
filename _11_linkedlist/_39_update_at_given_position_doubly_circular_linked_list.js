// 39. Update the node at given position in the doubly circular linked list
/**
 * Pattern Used: Iterative Traversal
 * Why this pattern: Traversal from whichever end is closer (using the doubly circular links) reaches the target index, then only its data field is mutated.
 *
 * Interview Scenario:
 * "A minor variant checking whether candidates optimize traversal direction using the available backward pointers."
 *
 * Example:
 *   Input:  circular list: 1<->2<->3<->(back to 1, doubly), updateAtPosition(9, index=1)
 *   Output: circular list: 1<->9<->3<->(back to 1, doubly)
 */
