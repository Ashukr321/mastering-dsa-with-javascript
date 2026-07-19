// 43. Merge two sorted linked list
// LeetCode: https://leetcode.com/problems/merge-two-sorted-lists/
/**
 * Pattern Used: Merge Technique (Two Pointer Merge)
 * Why this pattern: Two pointers walk the two sorted lists in tandem; at each step the smaller head node is spliced onto the result and only that pointer advances — the same merge step used in merge sort, but done via pointer rewiring instead of extra array storage.
 *
 * Interview Scenario:
 * "A very common interview question (LeetCode 21, Merge Two Sorted Lists) used to test whether candidates can merge in-place with O(1) extra space instead of copying values into a new array and re-sorting."
 *
 * Example:
 *   Input:  list1: 1 -> 3 -> 5 -> null, list2: 2 -> 4 -> 6 -> null
 *   Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
 */
