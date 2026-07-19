// 2. Selection Sort
// LeetCode: https://leetcode.com/problems/sort-an-array/

/**
 * Pattern Used: Comparison Sort - Selection (Min-Finding)
 * Why this pattern: On each pass it scans the remaining unsorted subarray to find the minimum and swaps it into place, giving O(n^2) comparisons but only O(n) swaps total; it is in-place but unstable since a swap can move an equal element past another.
 *
 * Interview Scenario:
 * "Asked when minimizing the number of writes matters (e.g., sorting data on flash memory or EEPROM) to test whether the candidate can justify selection sort's low swap count versus bubble/insertion sort."
 *
 * Example:
 *   Input:  [64, 25, 12, 22, 11]
 *   Output: [11, 12, 22, 25, 64]
 */
