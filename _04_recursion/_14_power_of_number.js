// 14. Power of the number
// LeetCode: https://leetcode.com/problems/powx-n/
/**
 * Pattern Used: Divide and Conquer (Exponentiation by Squaring)
 * Why this pattern: Computing x^n by recursively computing x^(n/2) and squaring it (handling odd/even exponents separately) reduces the time complexity from O(n) to O(log n), a hallmark of divide-and-conquer thinking.
 *
 * Interview Scenario:
 * "A very popular interview question at Google and Amazon to test whether a candidate can go beyond naive O(n) recursion to an optimized O(log n) solution: 'Implement pow(x, n) efficiently.'"
 *
 * Example:
 *   Input:  x = 2, n = 10
 *   Output: 1024
 */
