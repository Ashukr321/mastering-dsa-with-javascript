// 24. Sum of digits of a number
// LeetCode: https://leetcode.com/problems/add-digits/ (similar)
/**
 * Pattern Used: Digit Extraction via Modulo/Division
 * Why this pattern: Digits are extracted one at a time with `% 10` and accumulated into a running total while
 * the number is reduced with integer division `/ 10` until it reaches 0.
 *
 * Interview Scenario:
 * "Related to LeetCode 258 (Add Digits): sum the digits of a number, often extended to 'digital root' where the
 * process repeats until a single digit remains -- tests basic digit-manipulation fluency."
 *
 * Example:
 *   Input:  1234
 *   Output: 10
 */
