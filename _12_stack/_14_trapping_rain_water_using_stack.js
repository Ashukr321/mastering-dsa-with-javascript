// 14. Compute Trapped Rain Water Using A Stack

/**
 * Pattern Used: Monotonic Stack (Decreasing, Bounded-Container Technique)
 * Why this pattern: Keeping a stack of decreasing bar heights lets you
 * detect, the moment a taller bar appears, a bounded "container" between it
 * and the previous taller bar behind the popped valley, so the trapped
 * water above that valley can be computed directly in a single O(n) pass.
 *
 * Interview Scenario:
 * "Well-known hard FAANG question: given an array of non-negative integers
 * representing an elevation map, compute how much rain water it can trap
 * after raining, using a monotonic stack instead of the two-pointer or
 * precomputed max-height-arrays approach."
 *
 * Example:
 *   Input:  height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
 *   Output: 6
 */
