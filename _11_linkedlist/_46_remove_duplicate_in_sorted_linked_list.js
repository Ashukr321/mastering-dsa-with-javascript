// 46. Remove duplicate in the sorted linked list
// LeetCode: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
/**
 * Pattern Used: In-place Pointer Rewiring (Two Pointer Traversal)
 * Why this pattern: Because the list is sorted, duplicate values are always adjacent, so a single traversal pointer only needs to compare the current node to the next one and rewire next to skip over any repeats.
 *
 * Interview Scenario:
 * "A common warm-up question (LeetCode 83, Remove Duplicates from Sorted List) used to check that candidates exploit the sorted property instead of using a hash set, which would need extra space."
 *
 * Example:
 *   Input:  list: 1 -> 1 -> 2 -> 3 -> 3 -> null
 *   Output: 1 -> 2 -> 3 -> null
 */
