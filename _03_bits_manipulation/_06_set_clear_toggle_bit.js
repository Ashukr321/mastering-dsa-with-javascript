// 6. Set, Clear, and Toggle a Specific Bit in a Number

/**
 * Pattern Used: Bit Masking (Set/Clear/Toggle Operations)
 * Why this pattern: OR-ing with a shifted mask turns a bit on, AND-ing with its inverted mask turns a bit off,
 * and XOR-ing with the mask flips a bit - three complementary bitwise operations for targeted single-bit edits.
 *
 * Interview Scenario:
 * "Common in systems/embedded and flag-manipulation interviews: given a number and a bit position, write
 * operations to set that bit to 1, clear it to 0, and toggle it, all without disturbing any other bits."
 *
 * Example:
 *   Input:  n = 5 (binary: 0101), position = 1
 *   Output: setBit -> 7 (0111), clearBit -> 5 (0101), toggleBit -> 7 (0111)
 */
