// 45. Delete the loop in the linked list
// LeetCode: https://leetcode.com/problems/linked-list-cycle-ii/ (related - find cycle start)
/**
 * Pattern Used: Fast & Slow Pointers + Pointer Rewiring (Floyd's Cycle Detection & Removal)
 * Why this pattern: After the fast/slow pointers meet inside a cycle, one pointer is reset to head and both advance one step at a time until they meet again at the cycle's start node; the loop is then broken by rewiring the node just before the start to point to null.
 *
 * Interview Scenario:
 * "A harder follow-up to the cycle-detection question (related to LeetCode 142, Linked List Cycle II), often asked at Amazon/Microsoft to test if candidates can not only detect but also repair a corrupted list."
 *
 * Example:
 *   Input:  list: 1 -> 2 -> 3 -> 4 -> (4 points back to 2, forming a cycle)
 *   Output: 1 -> 2 -> 3 -> 4 -> null (cycle removed)
 */
