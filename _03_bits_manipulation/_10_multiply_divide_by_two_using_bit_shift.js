// 10. Multiply and Divide a Number by 2 Using Bit Shift Operators

/**
 * Pattern Used: Bit Shifting (Arithmetic via Shift)
 * Why this pattern: Shifting bits left by 1 doubles a number's value and shifting right by 1 halves it (floor
 * division), since each bit position represents a power of two, making shifts a faster substitute for `* 2` and `/ 2`.
 *
 * Interview Scenario:
 * "Asked to gauge understanding of binary place value, and a building block for LeetCode 29 (Divide Two
 * Integers): given an integer, multiply and divide it by 2 using only bitwise shift operators, and discuss how
 * this behaves differently for negative numbers."
 *
 * Example:
 *   Input:  n = 18
 *   Output: multiply -> 36, divide -> 9
 */
