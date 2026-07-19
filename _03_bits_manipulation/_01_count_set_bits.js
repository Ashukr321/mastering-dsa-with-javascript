// 1. Count the Number of Set Bits (1s) in the Binary Representation of an Integer

/**
 * Pattern Used: Bit Masking (Brian Kernighan's Algorithm)
 * Why this pattern: Repeatedly clearing the lowest set bit with `n & (n - 1)` removes exactly one 1-bit per
 * iteration, so the loop runs only as many times as there are set bits instead of checking every bit position.
 *
 * Interview Scenario:
 * "A classic bit-manipulation warm-up (LeetCode 191): count how many 1 bits are in the binary form of an
 * unsigned integer, then be ready to explain why Brian Kernighan's trick beats checking all 32 bit positions."
 *
 * Example:
 *   Input:  n = 11 (binary: 1011)
 *   Output: 3
 */
