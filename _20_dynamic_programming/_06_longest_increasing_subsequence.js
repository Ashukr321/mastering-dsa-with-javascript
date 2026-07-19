// 6. Longest Increasing Subsequence
// LeetCode: https://leetcode.com/problems/longest-increasing-subsequence/

/**
 * Pattern Used: 1D Dynamic Programming (Memoization/Tabulation)
 * Why this pattern: The longest increasing subsequence ending at index i
 * depends on the best increasing subsequence ending at every earlier index
 * whose value is smaller, so each position's answer builds on previously
 * solved sub-problems.
 *
 * Interview Scenario:
 * "Very common interview question to test DP-on-arrays thinking: given an
 * unsorted array of integers, find the length of the longest strictly
 * increasing subsequence, then discuss optimizing from O(n^2) to O(n log n)."
 *
 * Example:
 *   Input:  nums = [10, 9, 2, 5, 3, 7, 101, 18]
 *   Output: 4 ([2, 3, 7, 101])
 */
