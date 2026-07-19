// 2. Insert the node at end of the singly linked list
/**
 * Pattern Used: In-place Pointer Rewiring
 * Why this pattern: Insertion at the tail requires traversing to the last node (the one whose next is null) and rewiring its next pointer to the new node — an O(n) walk followed by an O(1) pointer update.
 *
 * Interview Scenario:
 * "Commonly asked at Microsoft to test whether a candidate naively re-traverses the whole list or maintains a tail pointer to make the append O(1)."
 *
 * Example:
 *   Input:  list: 1 -> 2 -> null, insertAtEnd(3)
 *   Output: 1 -> 2 -> 3 -> null
 */
