// 18. Find missing number in array from 1 to n
// LeetCode: https://leetcode.com/problems/missing-number/
/**
 * Pattern Used: Math (Gauss Sum Formula) / XOR Technique
 * Why this pattern: Since the array should contain 1..n exactly once, the missing number is found by subtracting the actual sum (or XOR) from the expected sum (or XOR) in a single pass, using O(1) extra space.
 *
 * Interview Scenario:
 * "Asked at Amazon/Microsoft: 'An array should contain roll numbers 1 to n but one student's form got lost — find the missing roll number.' Tests knowledge of the arithmetic/XOR trick over hashing with O(n) space."
 *
 * Example:
 *   Input:  [1,2,4,5], n = 5
 *   Output: 3
 */
