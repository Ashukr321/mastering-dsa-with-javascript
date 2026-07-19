// 16. Maximum and minimum digits in a number
/**
 * Pattern Used: Digit Extraction with Running Comparison
 * Why this pattern: Digits are peeled off one at a time via `% 10`/`/ 10`, and each is compared against running
 * max/min accumulators, giving an O(digits) single-pass scan without converting to an array or string.
 *
 * Interview Scenario:
 * "Tests whether a candidate can track two running extremes in a single pass over digits, similar in spirit to
 * finding max/min in an array but applied to the digits of a number instead."
 *
 * Example:
 *   Input:  8435
 *   Output: { max: 8, min: 3 }
 */
