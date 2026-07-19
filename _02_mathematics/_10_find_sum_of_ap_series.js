// 10. Find sum of AP series
/**
 * Pattern Used: Arithmetic Progression (AP) Formula
 * Why this pattern: The sum of an AP is computed directly with the closed-form formula
 * `S = n/2 * (2a + (n-1)d)`, avoiding an O(n) accumulation loop.
 *
 * Interview Scenario:
 * "Tests recall and application of the arithmetic-series formula given the first term, common difference, and
 * number of terms -- often a lead-in to more general series-summation problems."
 *
 * Example:
 *   Input:  a = 2, d = 3, n = 5
 *   Output: 40 (2 + 5 + 8 + 11 + 14)
 */
