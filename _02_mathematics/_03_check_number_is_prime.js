// 3. Check if a number is prime or not
// LeetCode: https://leetcode.com/problems/count-primes/ (similar)
/**
 * Pattern Used: Brute Force Divisor Check
 * Why this pattern: Primality is tested by trial division, checking divisibility only up to `sqrt(n)` since any
 * factor larger than the square root must pair with one smaller than it, cutting the work from O(n) to O(sqrt(n)).
 *
 * Interview Scenario:
 * "A staple interview question to gauge optimization instincts: naive candidates check all divisors up to n,
 * but the expected answer checks only up to sqrt(n) and skips even numbers after handling 2 separately."
 *
 * Example:
 *   Input:  29
 *   Output: true
 */
