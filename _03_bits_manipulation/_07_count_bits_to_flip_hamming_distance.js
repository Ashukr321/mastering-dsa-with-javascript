// 7. Count the Total Number of Bits to Flip to Convert Number A to Number B

/**
 * Pattern Used: XOR Trick (Differing Bit Count / Hamming Distance)
 * Why this pattern: XOR-ing A and B produces a 1 wherever the two numbers differ in a bit position, so counting
 * the set bits in `a ^ b` (via Brian Kernighan's algorithm) directly gives the number of bits that must flip.
 *
 * Interview Scenario:
 * "A common follow-up to the set-bits-counting question (LeetCode 461): given two integers, find the number
 * of positions at which their binary representations differ, i.e. the Hamming distance between them."
 *
 * Example:
 *   Input:  a = 4 (0100), b = 14 (1110)
 *   Output: 2
 */
