// 20. Binary search in array using iterative methods
// LeetCode: https://leetcode.com/problems/binary-search/
/**
 * Pattern Used: Binary Search
 * Why this pattern: Because the array is sorted, the search space can be halved on every comparison using low/high pointers, giving O(log n) lookup instead of O(n).
 *
 * Interview Scenario:
 * "A fundamental question at every product-based company (Amazon, Google, Microsoft): 'Given a sorted list of transaction IDs, efficiently check whether a given ID exists.' Tests iterative implementation of binary search without recursion overhead."
 *
 * Example:
 *   Input:  arr = [1,3,5,7,9,11], target = 7
 *   Output: 3 (index)
 */
