// 10. Partition Equal Subset Sum
// LeetCode: https://leetcode.com/problems/partition-equal-subset-sum/

/**
 * Pattern Used: 0/1 Knapsack Pattern
 * Why this pattern: Splitting an array into two equal-sum halves is the same
 * as asking whether some subset sums to exactly half the total, which is a
 * direct application of the 0/1 knapsack / subset-sum DP.
 *
 * Interview Scenario:
 * "Asked as a real-world framing of subset sum: given an array of positive
 * integers, determine whether it can be partitioned into two subsets with
 * equal sums."
 *
 * Example:
 *   Input:  nums = [1, 5, 11, 5]
 *   Output: true ([1, 5, 5] and [11])
 */
