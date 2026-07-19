// 29. Calculate the product of digits of number
/**
 * Pattern Used: Digit Extraction Recursion (Multiplicative Accumulator)
 * Why this pattern: Similar to sum-of-digits, but each recursive step multiplies the last digit into the accumulated product instead of adding it, testing whether a candidate can swap the combining operator correctly (including the base case value of 1, not 0).
 *
 * Interview Scenario:
 * "A subtle variation question interviewers use to catch a common bug: candidates who reuse the sum-of-digits base case of 0 instead of 1, which would zero out the entire product."
 *
 * Example:
 *   Input:  n = 234
 *   Output: 24  (2*3*4)
 */
