// 28. Find first duplicate element in array
/**
 * Pattern Used: Hashing / Seen-Set Tracking
 * Why this pattern: Scanning left to right while recording seen elements in a set lets the algorithm return the first element it encounters a second time, in a single pass.
 *
 * Interview Scenario:
 * "Asked at Amazon/Microsoft: 'Given a stream of ticket IDs being processed, return the first ticket ID that gets processed twice.' Tests set-based early-exit detection over sorting-based approaches that lose original order."
 *
 * Example:
 *   Input:  [2, 1, 3, 5, 3, 2]
 *   Output: 3
 */
