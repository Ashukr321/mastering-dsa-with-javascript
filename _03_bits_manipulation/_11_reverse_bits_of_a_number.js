// 11. Reverse the Bits of a Given 32-bit Unsigned Integer

/**
 * Pattern Used: Bit Shifting (Bit-by-Bit Reversal)
 * Why this pattern: Extracting the lowest bit of the input and shifting it into the highest available position
 * of the result, one bit at a time over all 32 positions, rebuilds the number with its bit order fully reversed.
 *
 * Interview Scenario:
 * "A low-level bit-twiddling question (LeetCode 190): given a 32-bit unsigned integer, return the integer
 * obtained by reversing the order of its bits, and discuss how this relates to two's complement representation."
 *
 * Example:
 *   Input:  n = 43261596 (00000010100101000001111010011100)
 *   Output: 964176192 (00111001011110000010100101000000)
 */
