// 27. Calculate the maximum element of the array
/**
 * Pattern Used: Linear Recursion / Reduce Pattern (Compare-and-Recurse)
 * Why this pattern: The maximum of the array equals the larger of the first element and the maximum of the rest of the array, a recursive reformulation of the classic reduce/fold pattern.
 *
 * Interview Scenario:
 * "Common at interviews checking whether a candidate can reimplement Math.max/Array.reduce recursively, often followed by 'now do the same without extra array copies, using an index instead of slice'."
 *
 * Example:
 *   Input:  arr = [3, 7, 2, 9, 4]
 *   Output: 9
 */
