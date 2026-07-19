// 9. Sum of first N natural numbers
/**
 * Pattern Used: Mathematical Formula (Gauss Summation)
 * Why this pattern: Instead of looping from 1 to n and accumulating, the closed-form formula `n * (n + 1) / 2`
 * computes the sum in O(1), reflecting Gauss's classic insight about pairing terms.
 *
 * Interview Scenario:
 * "A common opener to test whether a candidate reaches for the O(1) formula instead of an O(n) loop when asked
 * to sum the first n natural numbers, and whether they can derive/justify the formula on a whiteboard."
 *
 * Example:
 *   Input:  n = 5
 *   Output: 15
 */
