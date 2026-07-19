// 31. Reverse the number using recursion
/**
 * Pattern Used: Digit Extraction Recursion (Reversal Accumulator)
 * Why this pattern: Each call extracts the last digit via n % 10 and builds the reversed number by shifting the accumulator (acc * 10 + digit) before recursing on the remaining digits.
 *
 * Interview Scenario:
 * "A common follow-up to 'reverse a string' that checks if a candidate can apply the same reversal idea to digits of a number without converting it to a string."
 *
 * Example:
 *   Input:  n = 12345
 *   Output: 54321
 */
