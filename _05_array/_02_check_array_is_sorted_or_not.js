// 2. Check array is sorted or not
/**
 * Pattern Used: Two Pointers (Adjacent Element Comparison)
 * Why this pattern: Determining sortedness only needs comparison of each element with its neighbor, which is a specialized single-pass, adjacent-pair variant of the two-pointer technique.
 *
 * Interview Scenario:
 * "Common in Amazon/Flipkart online assessments as a precursor question: 'Before running binary search on this array, verify it's actually sorted.' Tests whether a candidate reaches for O(n) traversal instead of sorting and comparing."
 *
 * Example:
 *   Input:  [1, 2, 3, 4, 5]
 *   Output: true
 */
