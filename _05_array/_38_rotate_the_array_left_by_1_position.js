// 38. Rotate the Array left by 1 position
/**
 * Pattern Used: In-place Shift (Rotation by One)
 * Why this pattern: A single left rotation is achieved by caching the first element, shifting the rest left by one index, and appending the cached element at the end, in O(n) time and O(1) extra space.
 *
 * Interview Scenario:
 * "Asked as a quick fundamentals check at service-based companies: 'Rotate a playlist array so the first song moves to the end.' Confirms in-place shifting logic before extending to k-rotations."
 *
 * Example:
 *   Input:  [1, 2, 3, 4, 5]
 *   Output: [2, 3, 4, 5, 1]
 */
