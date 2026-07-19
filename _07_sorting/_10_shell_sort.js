// 10. Shell Sort

/**
 * Pattern Used: Comparison Sort - Gap-based Insertion (Diminishing Increment)
 * Why this pattern: Generalizes insertion sort by first comparing and swapping elements that are far apart (using a shrinking gap sequence such as n/2, n/4, ... 1), moving out-of-place elements toward their final position much faster than a single gap-1 pass; depending on the gap sequence (e.g., Knuth's) it runs sub-quadratically (around O(n^1.3)), in-place, but is unstable because of the long-distance swaps.
 *
 * Interview Scenario:
 * "Asked to explain why Shell sort improves on plain insertion sort for medium-sized arrays and to implement the gap-sequence-driven insertion loop without allocating extra memory."
 *
 * Example:
 *   Input:  [12, 34, 54, 2, 3]
 *   Output: [2, 3, 12, 34, 54]
 */
