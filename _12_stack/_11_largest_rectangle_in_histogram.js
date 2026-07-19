// 11. Find The Largest Rectangular Area In A Histogram

/**
 * Pattern Used: Monotonic Stack (Increasing, With Index Tracking)
 * Why this pattern: Keeping a stack of bar indices with increasing heights
 * lets you detect, the moment a shorter bar appears, exactly how far the
 * taller bars behind it can extend as a rectangle's width, resolving every
 * bar's maximal rectangle in a single O(n) pass instead of checking every
 * pair of bars.
 *
 * Interview Scenario:
 * "Hard but frequently asked FAANG question: given an array of bar heights
 * representing a histogram, find the area of the largest rectangle that
 * fits entirely under the histogram outline, using a monotonic stack to
 * avoid the O(n^2) brute-force approach."
 *
 * Example:
 *   Input:  heights = [2, 1, 5, 6, 2, 3]
 *   Output: 10  (rectangle formed by bars of height 5 and 6, width 2)
 */
