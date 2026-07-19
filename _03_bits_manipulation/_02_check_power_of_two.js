// 2. Check if a Given Number is a Power of 2

/**
 * Pattern Used: Bit Masking (Single Set Bit Check)
 * Why this pattern: A power of two has exactly one set bit in its binary form, so `n & (n - 1)` clears that
 * single bit and yields 0 only when n was a power of two, avoiding loops or logarithms entirely.
 *
 * Interview Scenario:
 * "A quick sanity-check question (LeetCode 231): given an integer, determine if it is a power of two using
 * bitwise operations instead of repeated division, and handle n <= 0 as an edge case."
 *
 * Example:
 *   Input:  n = 16
 *   Output: true
 */
