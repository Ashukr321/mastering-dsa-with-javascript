// 3. Heapify an array (build a valid heap from an arbitrary array)
// LeetCode: https://www.geeksforgeeks.org/problems/building-heap-from-array/1

/**
 * Pattern Used: Bottom-Up Heapify (Build-Heap in O(n))
 * Why this pattern: Calling sift-down starting from the last non-leaf node up
 * to the root converts an arbitrary array into a valid heap in linear time,
 * which is faster than inserting every element one by one (O(n log n)).
 *
 * Interview Scenario:
 * "Interviewer wants to see you know heap construction isn't naive: given an
 * arbitrary unsorted array, convert it in-place into a valid min-heap (or
 * max-heap) using the bottom-up heapify algorithm, and explain why it's
 * O(n) rather than O(n log n)."
 *
 * Example:
 *   Input:  arr = [4, 10, 3, 5, 1]
 *   Output: [1, 4, 3, 5, 10] (a valid min-heap arrangement of the same elements)
 */
