// 14. Maximum Product Subarray
// LeetCode: https://leetcode.com/problems/maximum-product-subarray/

/**
 * Pattern Used: 1D Dynamic Programming (Memoization/Tabulation)
 * Why this pattern: A negative number can flip the smallest running product
 * into the largest, so the DP must track both the maximum and minimum
 * product ending at each index and update both together as it scans the array.
 *
 * Interview Scenario:
 * "Tricky array DP question that trips people up because of negative
 * numbers: given an array of integers, find the contiguous subarray that has
 * the largest product."
 *
 * Example:
 *   Input:  nums = [2, 3, -2, 4]
 *   Output: 6 ([2, 3])
 */
