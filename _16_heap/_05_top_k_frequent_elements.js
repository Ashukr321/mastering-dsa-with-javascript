// 5. Top K frequent elements
// LeetCode: https://leetcode.com/problems/top-k-frequent-elements/

/**
 * Pattern Used: Top-K Elements via Heap
 * Why this pattern: Counting frequencies with a hash map and then keeping a
 * min-heap of size k (ordered by frequency) lets the k least-frequent of the
 * "top k so far" be evicted cheaply, yielding the k most frequent elements in
 * O(n log k) instead of sorting everything in O(n log n).
 *
 * Interview Scenario:
 * "Common Facebook/Amazon question: given an array of numbers, return the k
 * elements that occur most frequently, and be ready to discuss why a
 * size-limited heap beats sorting the full frequency list when k is much
 * smaller than n."
 *
 * Example:
 *   Input:  nums = [1, 1, 1, 2, 2, 3], k = 2
 *   Output: [1, 2]
 */
