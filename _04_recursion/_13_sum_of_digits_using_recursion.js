// 13. Calculate the sum of the digits using recursion
// LeetCode: https://leetcode.com/problems/add-digits/ (related)
/**
 * Pattern Used: Digit Extraction Recursion (Modulo/Divide)
 * Why this pattern: Peeling off the last digit with n % 10 and recursing on the remaining number via Math.floor(n / 10) is the standard recursive technique for digit-by-digit number processing.
 *
 * Interview Scenario:
 * "A very common interview question at service-based companies (TCS, Cognizant) and a natural lead-in to LeetCode 258 'Add Digits', where the interviewer asks to repeat the process until a single digit remains."
 *
 * Example:
 *   Input:  n = 12345
 *   Output: 15
 */
