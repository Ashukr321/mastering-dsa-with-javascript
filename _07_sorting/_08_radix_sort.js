// 8. Radix Sort
// LeetCode: https://leetcode.com/problems/maximum-gap/ (related)

/**
 * Pattern Used: Non-comparison Sort - Radix/Bucketing (Digit-based)
 * Why this pattern: Sorts integers digit-by-digit (typically least-significant to most-significant) using a stable per-digit bucketing pass (often counting sort internally), giving O(d * (n + b)) time where d is the number of digits and b is the base/bucket count; it never compares whole elements directly, and stability of the digit pass keeps the overall sort stable.
 *
 * Interview Scenario:
 * "Asked in the context of 'Maximum Gap' to test understanding of how digit-wise bucketing on bounded integers can achieve near-linear time and to justify picking radix sort over quicksort/mergesort for that constraint."
 *
 * Example:
 *   Input:  [170, 45, 75, 90, 802, 24, 2, 66]
 *   Output: [2, 24, 45, 66, 75, 90, 170, 802]
 */
