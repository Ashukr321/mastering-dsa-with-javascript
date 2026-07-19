// 3. Insertion Sort
// LeetCode: https://leetcode.com/problems/insertion-sort-list/ (linked list version)

/**
 * Pattern Used: Comparison Sort - Incremental Insertion
 * Why this pattern: Builds a sorted prefix one element at a time, shifting larger elements right to insert the current element into its correct spot; this is O(n^2) worst case but O(n) on nearly-sorted data, stable, in-place, and adaptive.
 *
 * Interview Scenario:
 * "Asked to explain why insertion sort is used as the base case inside hybrid sorts like Timsort/Introsort for small subarrays, and to implement the shift-and-insert loop from scratch."
 *
 * Example:
 *   Input:  [12, 11, 13, 5, 6]
 *   Output: [5, 6, 11, 12, 13]
 */
