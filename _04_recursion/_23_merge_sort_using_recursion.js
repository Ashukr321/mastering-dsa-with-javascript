// 23. Implement merge sort algorithm using recursion
// LeetCode: https://leetcode.com/problems/sort-an-array/ (related)
/**
 * Pattern Used: Divide and Conquer
 * Why this pattern: The array is split in half, each half is sorted recursively, and the two sorted halves are merged, the canonical divide-and-conquer sorting algorithm with guaranteed O(n log n) performance.
 *
 * Interview Scenario:
 * "A staple algorithms interview question to test whether a candidate can implement a stable O(n log n) sort from scratch, frequently followed by 'how would you merge two sorted arrays/lists' as a sub-question."
 *
 * Example:
 *   Input:  arr = [5, 2, 9, 1, 5, 6]
 *   Output: [1, 2, 5, 5, 6, 9]
 */
