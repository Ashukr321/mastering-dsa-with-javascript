// 25. Find the maximum frequency of array element
// LeetCode: https://leetcode.com/problems/sort-array-by-increasing-frequency/ (related)
/**
 * Pattern Used: Hashing / Frequency Map
 * Why this pattern: Counting each element's occurrences in a hash map and then scanning the map for the largest count identifies the most frequent element in linear time.
 *
 * Interview Scenario:
 * "Asked at Adobe/Flipkart: 'Given an array of product SKUs sold today, find which SKU sold the most units.' Tests the two-step hash-then-scan approach for mode-finding."
 *
 * Example:
 *   Input:  [1, 3, 2, 1, 4, 1]
 *   Output: 1 (frequency 3)
 */
