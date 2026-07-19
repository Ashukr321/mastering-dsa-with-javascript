// 36. Sort 0 1 and 2
// LeetCode: https://leetcode.com/problems/sort-colors/
/**
 * Pattern Used: Dutch National Flag
 * Why this pattern: With only three distinct values, a single-pass three-pointer partition (low/mid/high) sorts the array in O(n) time and O(1) space without a general-purpose sort.
 *
 * Interview Scenario:
 * "A recurring favorite at Google/Microsoft/Flipkart: 'Sort an array of traffic light states (0=red, 1=yellow, 2=green) in a single pass.' Directly tests the Dutch National Flag partitioning technique."
 *
 * Example:
 *   Input:  [0, 1, 2, 0, 1, 2]
 *   Output: [0, 0, 1, 1, 2, 2]
 */
