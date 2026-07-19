// 42. Reverse the linked list using recursive
// LeetCode: https://leetcode.com/problems/reverse-linked-list/
/**
 * Pattern Used: Recursion on Linked Structures
 * Why this pattern: The function recurses to the end of the list first, then, unwinding back up the call stack, flips each node's next pointer to point at its predecessor instead of its successor — a post-order pointer rewire.
 *
 * Interview Scenario:
 * "One of the most asked interview questions overall (LeetCode 206, Reverse Linked List): candidates are usually asked to solve it both iteratively and recursively to show they understand the call-stack trade-off (O(n) space vs O(1))."
 *
 * Example:
 *   Input:  list: 1 -> 2 -> 3 -> null
 *   Output: 3 -> 2 -> 1 -> null
 */
