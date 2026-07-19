// 39. Rotate array right by 1 position
/**
 * Pattern Used: In-place Shift (Rotation by One)
 * Why this pattern: A single right rotation is achieved by caching the last element, shifting every other element right by one index, and placing the cached element at the front.
 *
 * Interview Scenario:
 * "Asked alongside the left-rotation variant: 'Rotate a playlist array so the last song moves to the front.' Tests whether the candidate can mirror the left-rotation logic in the opposite direction."
 *
 * Example:
 *   Input:  [1, 2, 3, 4, 5]
 *   Output: [5, 1, 2, 3, 4]
 */
