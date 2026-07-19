// 29. Program to check if a number is Automorphic or not
/**
 * Pattern Used: Digit Suffix Matching
 * Why this pattern: The number is squared, and the check verifies whether the original number appears as the
 * trailing suffix of its square -- done by comparing `square % 10^(digitCount)` against the original number.
 *
 * Interview Scenario:
 * "A niche number-theory check (e.g. 5^2 = 25 ends in 5, 76^2 = 5776 ends in 76): tests whether a candidate can
 * derive the right modulo power to isolate the trailing digits for comparison."
 *
 * Example:
 *   Input:  25
 *   Output: true (25^2 = 625, ends with 25)
 */
