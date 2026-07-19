// 15. Reverse digits of a number
// LeetCode: https://leetcode.com/problems/reverse-integer/
/**
 * Pattern Used: Digit Extraction via Modulo/Division
 * Why this pattern: The number is reversed by repeatedly taking the last digit with `% 10`, appending it to an
 * accumulator (`acc * 10 + digit`), and stripping it from the original with integer division `/ 10`.
 *
 * Interview Scenario:
 * "LeetCode 7 (Reverse Integer): reverse the digits of a signed 32-bit integer, and handle overflow beyond the
 * 32-bit range -- a favorite for testing overflow-awareness and sign handling."
 *
 * Example:
 *   Input:  1534
 *   Output: 4351
 */
