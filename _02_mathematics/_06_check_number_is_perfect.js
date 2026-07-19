// 6. Check if a number is a perfect number or not
// LeetCode: https://leetcode.com/problems/perfect-number/
/**
 * Pattern Used: Brute Force Divisor Check
 * Why this pattern: All proper divisors of n (from 1 to n/2, or up to sqrt(n) with pairing) are found and summed;
 * the number is perfect when that sum equals the number itself.
 *
 * Interview Scenario:
 * "A number-theory classic: determine if a number equals the sum of its proper divisors (e.g. 6 = 1 + 2 + 3) --
 * used to test whether a candidate can enumerate divisors efficiently instead of looping to n."
 *
 * Example:
 *   Input:  28
 *   Output: true (1 + 2 + 4 + 7 + 14 = 28)
 */
