// 11. Program to find the sum of GP series
/**
 * Pattern Used: Geometric Progression (GP) Formula
 * Why this pattern: The sum of a GP is computed with the closed-form formula `S = a * (r^n - 1) / (r - 1)`
 * (or `a * (1 - r^n) / (1 - r)`), avoiding an O(n) multiplication loop, with the special case r = 1 handled separately.
 *
 * Interview Scenario:
 * "Checks whether a candidate knows the geometric-series formula and can spot the r = 1 edge case (division by
 * zero in the naive formula), a subtle trap interviewers like to probe."
 *
 * Example:
 *   Input:  a = 1, r = 2, n = 5
 *   Output: 31 (1 + 2 + 4 + 8 + 16)
 */
