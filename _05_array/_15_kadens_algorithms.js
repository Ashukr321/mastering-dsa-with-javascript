// 15. Kaden’s algorithms
// LeetCode: https://leetcode.com/problems/maximum-subarray/
/**
 * Pattern Used: Kadane's Algorithm
 * Why this pattern: The maximum subarray sum problem is solved optimally by tracking the best sum ending at each index and resetting when the running sum turns negative, avoiding the O(n^2) brute force.
 *
 * Interview Scenario:
 * "One of the most asked DSA questions at Amazon/Microsoft/Google: 'Given daily stock price changes, find the contiguous period with the maximum cumulative gain.' Directly tests knowledge of Kadane's dynamic-programming style scan."
 *
 * Example:
 *   Input:  [-2,1,-3,4,-1,2,1,-5,4]
 *   Output: 6 (subarray [4,-1,2,1])
 */
