// 9. Sliding Window Maximum Using a Deque

/**
 * Pattern Used: Monotonic Deque (Sliding Window)
 * Why this pattern: Keeping a deque of indices in decreasing value order lets
 * the window's maximum always sit at the front, so each element is pushed and
 * popped at most once for overall O(n) time instead of O(n*k) brute force.
 *
 * Interview Scenario:
 * "Given an array and window size k, return the maximum of each sliding
 * window as it moves across the array in one pass - a frequent 'use a deque,
 * not a heap' trick question."
 *
 * Example:
 *   Input:  nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
 *   Output: [3, 3, 5, 5, 6, 7]
 */
