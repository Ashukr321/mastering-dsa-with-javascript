// 29. Generate all subarray of the array and print the the maximum sum subarray
// LeetCode: https://leetcode.com/problems/maximum-subarray/ (related)
/**
 * Pattern Used: Brute Force / Nested Loop Subarray Enumeration
 * Why this pattern: Generating every possible subarray with nested loops and summing each one demonstrates the naive O(n^2)/O(n^3) baseline that Kadane's algorithm later optimizes to O(n).
 *
 * Interview Scenario:
 * "Often asked as a follow-up to Kadane's algorithm: 'First show me the brute-force way to find the maximum subarray sum by enumerating all subarrays, then optimize it.' Tests whether a candidate can reason about complexity before jumping to the optimal solution."
 *
 * Example:
 *   Input:  [1, -2, 3, 4, -1]
 *   Output: 7 (subarray [3,4])
 */
