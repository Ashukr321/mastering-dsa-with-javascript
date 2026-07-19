// 4. Merge Sort
// LeetCode: https://leetcode.com/problems/sort-list/ (linked list version)

/**
 * Pattern Used: Divide and Conquer
 * Why this pattern: Recursively splits the array into halves until single elements remain, then merges sorted halves in linear time, guaranteeing O(n log n) regardless of input order at the cost of O(n) auxiliary space; the merge step preserves order of equal keys, making it stable.
 *
 * Interview Scenario:
 * "Asked to implement merge sort from scratch to test recursion and the two-pointer merge step, and to explain when its guaranteed O(n log n) and stability make it preferable to quicksort (e.g., external sorting, linked lists)."
 *
 * Example:
 *   Input:  [38, 27, 43, 3, 9, 82, 10]
 *   Output: [3, 9, 10, 27, 38, 43, 82]
 */
