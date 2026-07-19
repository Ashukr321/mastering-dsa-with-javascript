// 6. Heap Sort
// LeetCode: https://leetcode.com/problems/kth-largest-element-in-an-array/ (related)

/**
 * Pattern Used: Heap-based Selection (Binary Heap / Priority Queue)
 * Why this pattern: Builds a max-heap from the array (heapify) then repeatedly swaps the root max to the end and re-heapifies the remainder, giving a guaranteed O(n log n) time, in-place O(1) extra space sort that leverages the heap's O(log n) extract-max operation; swaps across the heap make it unstable.
 *
 * Interview Scenario:
 * "Asked as a follow-up to 'find the kth largest element' to test whether the candidate can derive heap sort from a priority-queue mental model and implement sift-down/heapify without extra memory."
 *
 * Example:
 *   Input:  [12, 11, 13, 5, 6, 7]
 *   Output: [5, 6, 7, 11, 12, 13]
 */
