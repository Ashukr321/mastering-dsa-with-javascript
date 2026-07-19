// 7. Counting Sort
// LeetCode: https://leetcode.com/problems/sort-colors/ (related)

/**
 * Pattern Used: Non-comparison Sort - Counting
 * Why this pattern: Tallies the frequency of each distinct value within a known, bounded range, then reconstructs the sorted output directly from the cumulative counts without ever comparing two elements; this achieves O(n + k) time (k = range of values), is stable when built with cumulative offsets, but needs O(k) extra space.
 *
 * Interview Scenario:
 * "Asked as a follow-up to 'Sort Colors' to test whether the candidate recognizes that a small, known value range lets you beat the O(n log n) comparison-sort lower bound with a counting-based approach."
 *
 * Example:
 *   Input:  [4, 2, 2, 8, 3, 3, 1]
 *   Output: [1, 2, 2, 3, 3, 4, 8]
 */
