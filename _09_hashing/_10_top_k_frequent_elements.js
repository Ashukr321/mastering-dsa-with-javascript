// 10. Find The Top K Frequent Elements In An Array

/**
 * Pattern Used: Hashing + Bucket Sort / Heap On Frequency Map
 * Why this pattern: A hash map first tallies the frequency of every element
 * in O(n), then bucketing frequencies by count (or using a heap) lets you
 * extract the k most frequent values without fully sorting all distinct
 * elements.
 *
 * Interview Scenario:
 * "Given a log of search queries, find the k most frequently searched terms
 * to power a 'trending searches' widget."
 *
 * Example:
 *   Input:  nums = [1, 1, 1, 2, 2, 3], k = 2
 *   Output: [1, 2] (1 appears 3 times, 2 appears 2 times)
 */
