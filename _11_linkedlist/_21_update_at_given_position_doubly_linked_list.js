// 21. Update the node at given position in the doubly linked list
/**
 * Pattern Used: Iterative Traversal
 * Why this pattern: Locating the node at the given index (walking from whichever end is closer) and mutating its data field in place — the prev/next links stay untouched.
 *
 * Interview Scenario:
 * "A minor variation used to check that candidates can pick the shorter traversal direction (from head or tail) when the list is doubly linked."
 *
 * Example:
 *   Input:  list: null<-1<->2<->3->null, updateAtPosition(9, index=1)
 *   Output: null<-1<->9<->3->null
 */
