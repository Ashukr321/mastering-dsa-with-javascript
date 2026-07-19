// 19. Find maximum sum sub array
// LeetCode: https://leetcode.com/problems/maximum-subarray/
/**
 * Pattern Used: Kadane's Algorithm
 * Why this pattern: Finding the maximum sum contiguous subarray is the textbook use case for Kadane's algorithm, tracking a running sum and resetting it when it becomes a drag on the total.
 *
 * Interview Scenario:
 * "Repeatedly asked in different phrasings at Amazon/Adobe: 'Find the most profitable contiguous stretch of trading days from a list of daily profit/loss values.' Tests recognition that this is the maximum subarray problem."
 *
 * Example:
 *   Input:  [-2,1,-3,4,-1,2,1,-5,4]
 *   Output: 6
 */
