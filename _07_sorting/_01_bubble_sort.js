// 1. Bubble Sort
// LeetCode: https://leetcode.com/problems/sort-an-array/

/**
 * Pattern Used: Comparison Sort - Adjacent Swapping
 * Why this pattern: Repeatedly walks the array comparing adjacent pairs and swapping them when out of order, so the largest unsorted element "bubbles" to its correct position each pass; this yields O(n^2) time / O(1) space and is stable since equal elements are never swapped.
 *
 * Interview Scenario:
 * "Asked as a warm-up question to test basic nested-loop tracing and whether the candidate can add the early-exit 'no swaps this pass' optimization to make it adaptive on nearly-sorted input."
 *
 * Example:
 *   Input:  [5, 3, 8, 4, 2]
 *   Output: [2, 3, 4, 5, 8]
 */
