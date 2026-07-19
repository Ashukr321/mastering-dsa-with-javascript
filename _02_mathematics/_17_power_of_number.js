// 17. Power of a number
// LeetCode: https://leetcode.com/problems/powx-n/
/**
 * Pattern Used: Exponentiation by Squaring (Divide and Conquer)
 * Why this pattern: Instead of multiplying the base n times (O(n)), the exponent is repeatedly halved and the
 * base squared, reducing the multiplication count to O(log n); negative exponents are handled via reciprocal.
 *
 * Interview Scenario:
 * "LeetCode 50 (Pow(x, n)): implement power in better than linear time, and correctly handle negative exponents,
 * n = 0, and fractional results -- a common test of divide-and-conquer thinking."
 *
 * Example:
 *   Input:  x = 2, n = 10
 *   Output: 1024
 */
