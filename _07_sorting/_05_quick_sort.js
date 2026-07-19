// 5. Quick Sort
// LeetCode: https://leetcode.com/problems/sort-an-array/

/**
 * Pattern Used: Divide and Conquer - In-place Partitioning (Quicksort)
 * Why this pattern: Chooses a pivot and partitions the array in-place so smaller elements land left and larger ones right, then recurses on each partition; average case is O(n log n) with O(log n) stack space, but a poor pivot choice on already-sorted input degrades it to O(n^2), and swaps make it unstable.
 *
 * Interview Scenario:
 * "Asked to implement the partition routine (Lomuto or Hoare scheme) from scratch at a systems-focused interview to test understanding of in-place partitioning, pivot selection strategies, and why naive pivot choice causes worst-case behavior on sorted arrays."
 *
 * Example:
 *   Input:  [10, 7, 8, 9, 1, 5]
 *   Output: [1, 5, 7, 8, 9, 10]
 */
