// 13. Greatest of three numbers
/**
 * Pattern Used: Chained Comparison
 * Why this pattern: The maximum of three values is found by chaining pairwise comparisons (or nested
 * `Math.max` calls), reducing the problem to two sequential O(1) comparisons.
 *
 * Interview Scenario:
 * "Extends the two-number-max warm-up to three values to see if a candidate generalizes comparison logic
 * cleanly (nested ifs vs. `Math.max(a, b, c)`) rather than hardcoding every branch."
 *
 * Example:
 *   Input:  a = 4, b = 9, c = 7
 *   Output: 9
 */
