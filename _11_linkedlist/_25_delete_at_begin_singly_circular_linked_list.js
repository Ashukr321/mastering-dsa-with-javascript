// 25. Delete the node at the begin of the singly circular linked list
/**
 * Pattern Used: In-place Pointer Rewiring
 * Why this pattern: Removing the head requires moving head to head.next and also rewiring the last node's next to point at the new head, so the circular chain is not broken.
 *
 * Interview Scenario:
 * "A favorite trick question: interviewers check whether the candidate remembers to re-point the last node when the head of a circular list changes."
 *
 * Example:
 *   Input:  circular list: 1 -> 2 -> 3 -> (back to 1), deleteAtBegin()
 *   Output: circular list: 2 -> 3 -> (back to 2)
 */
