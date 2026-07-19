// 7. Find median from a data stream
// LeetCode: https://leetcode.com/problems/find-median-from-data-stream/

/**
 * Pattern Used: Two Heaps Pattern
 * Why this pattern: Splitting numbers across a max-heap holding the smaller
 * half and a min-heap holding the larger half (kept balanced in size) lets
 * the median be read in O(1) from the heap tops, while each insert only
 * costs O(log n) to rebalance.
 *
 * Interview Scenario:
 * "Frequently asked streaming-data question: design a data structure that
 * supports addNum(num) and findMedian() where numbers arrive continuously
 * and the median must be available efficiently after every insertion,
 * without re-sorting the whole dataset each time."
 *
 * Example:
 *   Input:  addNum(1), addNum(2), findMedian(), addNum(3), findMedian()
 *   Output: findMedian() -> 1.5, then findMedian() -> 2
 */
