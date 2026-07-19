// 16. Dutch national algorithms
// LeetCode: https://leetcode.com/problems/sort-colors/
/**
 * Pattern Used: Dutch National Flag
 * Why this pattern: Partitioning an array of three distinct values (0, 1, 2) in-place is efficiently solved with the three-pointer (low/mid/high) Dutch National Flag technique in a single pass.
 *
 * Interview Scenario:
 * "Asked at Google/Microsoft: 'Sort an array containing only red, white, and blue balls (represented as 0, 1, 2) in-place in one pass.' Tests the three-way partitioning pattern over a generic sort."
 *
 * Example:
 *   Input:  [2,0,2,1,1,0]
 *   Output: [0,0,1,1,2,2]
 */
