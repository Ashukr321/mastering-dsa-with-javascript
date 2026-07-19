// 9. House Robber (Maximum Non-Adjacent Sum)
// LeetCode: https://leetcode.com/problems/house-robber/

/**
 * Pattern Used: 1D Dynamic Programming (Memoization/Tabulation)
 * Why this pattern: The best amount robbable up to house i is either the best
 * up to house i-1 (skip this house) or the best up to house i-2 plus this
 * house's value (rob this house), so the answer builds from two prior states.
 *
 * Interview Scenario:
 * "Popular interview question framed as a robber choosing houses on a street:
 * given the amount of money in each house, find the maximum total you can
 * steal without robbing two adjacent houses (which triggers the alarm)."
 *
 * Example:
 *   Input:  nums = [2, 7, 9, 3, 1]
 *   Output: 12 (rob houses at index 0, 2, 4: 2 + 9 + 1)
 */
