// 5. Check if a number is Armstrong or not
// LeetCode: https://leetcode.com/problems/armstrong-number/
/**
 * Pattern Used: Digit Extraction via Modulo/Division
 * Why this pattern: Digits are peeled off one at a time with `% 10` and `/ 10`, each raised to the power equal to
 * the total digit count, and summed; the number is Armstrong if that sum equals the original number.
 *
 * Interview Scenario:
 * "Tests whether a candidate can combine digit extraction with exponentiation: an Armstrong (narcissistic) number
 * equals the sum of its own digits each raised to the power of the digit count, e.g. 153 = 1^3 + 5^3 + 3^3."
 *
 * Example:
 *   Input:  153
 *   Output: true
 */
