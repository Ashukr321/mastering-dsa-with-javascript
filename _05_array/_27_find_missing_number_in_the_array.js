// 27. Find missing number in the array
// LeetCode: https://leetcode.com/problems/missing-number/
/**
 * Pattern Used: Math (Gauss Sum Formula) / XOR Technique
 * Why this pattern: Comparing the expected sum of 1..n with the actual array sum (or using XOR to cancel matching pairs) finds the single missing number in O(n) time and O(1) space.
 *
 * Interview Scenario:
 * "A repeat favorite across MAANG interviews, phrased differently: 'An inventory scan should log crate IDs 1 to n but one is missing — identify it without extra memory.' Reinforces the arithmetic/XOR missing-number trick."
 *
 * Example:
 *   Input:  [3,0,1]
 *   Output: 2
 */
