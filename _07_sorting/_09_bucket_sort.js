// 9. Bucket Sort
// LeetCode: https://leetcode.com/problems/top-k-frequent-elements/ (related)

/**
 * Pattern Used: Non-comparison Sort - Bucketing/Distribution
 * Why this pattern: Distributes elements into a fixed number of buckets based on their value range, sorts each bucket individually (commonly with insertion sort), then concatenates the buckets in order; this gives average O(n + k) time when input is uniformly distributed, but degrades toward O(n^2) if values cluster into few buckets.
 *
 * Interview Scenario:
 * "Asked when sorting uniformly distributed floating-point data (e.g., normalized scores in [0,1)) to test whether the candidate understands the distribution assumption bucket sort relies on and can compose it with a per-bucket comparison sort."
 *
 * Example:
 *   Input:  [0.42, 0.32, 0.75, 0.12, 0.9]
 *   Output: [0.12, 0.32, 0.42, 0.75, 0.9]
 */
