// 2. Binary Search
// LeetCode: https://leetcode.com/problems/binary-search/

/**
 * Pattern Used: Binary Search (Divide and Conquer on Sorted Array)
 * Why this pattern: Repeatedly compares the target to the middle element and
 * discards the half of the search space that cannot contain it, exploiting the
 * sorted-order invariant to run in O(log n).
 *
 * Interview Scenario:
 * "Classic Google/Amazon warm-up question to test O(log n) thinking: given a
 * sorted array, find the index of a target value, then be ready to extend it
 * to lower/upper bound variants (first/last occurrence, insert position)."
 *
 * Example:
 *   Input:  arr = [1, 3, 5, 7, 9, 11], target = 7
 *   Output: 3 (index of 7)
 */
