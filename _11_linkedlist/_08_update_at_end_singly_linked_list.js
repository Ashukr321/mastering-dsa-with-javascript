// 8. Update at end of the singly linked list
/**
 * Pattern Used: Iterative Traversal
 * Why this pattern: Updating the tail's value requires walking to the last node (next === null) and mutating its data field in place — no pointers are rewired, only the value changes.
 *
 * Interview Scenario:
 * "Used to check that candidates don't over-engineer a value update into a delete-and-reinsert operation."
 *
 * Example:
 *   Input:  list: 1 -> 2 -> 3 -> null, updateAtEnd(9)
 *   Output: 1 -> 2 -> 9 -> null
 */
