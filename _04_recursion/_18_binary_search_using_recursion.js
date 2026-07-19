// 18. Implement binary search using recursion
// LeetCode: https://leetcode.com/problems/binary-search/
/**
 * Pattern Used: Divide and Conquer
 * Why this pattern: Binary search repeatedly halves the search space and recurses into only the relevant half, the textbook divide-and-conquer algorithm with O(log n) time complexity.
 *
 * Interview Scenario:
 * "Asked in virtually every interview loop as a baseline algorithm question, often as a lead-in to trickier variants like 'search in rotated sorted array' or 'find first/last occurrence'."
 *
 * Example:
 *   Input:  arr = [1,3,5,7,9,11], target = 7
 *   Output: 3  (index of 7)
 */
