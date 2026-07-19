// 22. Insert at begin in singly circular linked list
/**
 * Pattern Used: In-place Pointer Rewiring
 * Why this pattern: Inserting at the head of a circular list must also fix the last node's next pointer to point at the new head, otherwise the circular property (last node pointing back to head) breaks.
 *
 * Interview Scenario:
 * "A common trick question at interviews: candidates who forget to update the last node's next-to-head link produce a list that silently stops being circular."
 *
 * Example:
 *   Input:  circular list: 2 -> 3 -> (back to 2), insertAtBegin(1)
 *   Output: circular list: 1 -> 2 -> 3 -> (back to 1)
 */
