// 6. Find The Next Greater Element For Every Array Element

/**
 * Pattern Used: Monotonic Stack (Decreasing)
 * Why this pattern: Scanning the array while keeping a stack of indices whose
 * "next greater" answer is still unknown lets each element be pushed and
 * popped at most once, resolving all answers in O(n) instead of the O(n^2)
 * brute-force pairwise scan.
 *
 * Interview Scenario:
 * "Very frequently asked pattern-recognition question: for each element in
 * an array, find the first element to its right that is strictly greater,
 * and explain why a monotonic decreasing stack beats the nested-loop
 * approach."
 *
 * Example:
 *   Input:  arr = [4, 5, 2, 10, 8]
 *   Output: [5, 10, 10, -1, -1]
 */
