// 32. Check the sum is part of subarray sum of array not
// LeetCode: https://leetcode.com/problems/subarray-sum-equals-k/ (related)
/**
 * Pattern Used: Prefix Sum / Hashing (Subarray Sum)
 * Why this pattern: By maintaining a running prefix sum and storing seen prefix sums in a hash set/map, the algorithm can check in O(1) average time whether some subarray sums to the target, in a single O(n) pass.
 *
 * Interview Scenario:
 * "Asked at Google/Amazon: 'Given daily net cash flow, determine if any contiguous run of days sums exactly to a target amount k.' Tests the prefix-sum-plus-hashing pattern over brute-force nested sums."
 *
 * Example:
 *   Input:  nums = [10, 2, -2, -20, 10], k = -10
 *   Output: true
 */
