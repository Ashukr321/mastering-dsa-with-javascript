// 34. Search in 2d matrix
// LeetCode: https://leetcode.com/problems/search-a-2d-matrix/
/**
 * Pattern Used: Binary Search (2D Matrix Treated as Flattened Sorted Array)
 * Why this pattern: When each row is sorted and the first element of each row is greater than the last element of the previous row, the matrix behaves like one sorted 1D array, so binary search can be applied by mapping a mid index to (row, col).
 *
 * Interview Scenario:
 * "Asked at Google/Microsoft: 'Given a seating chart matrix sorted row-wise and column-wise, efficiently check if a seat number exists.' Tests the index-mapping trick for applying binary search over 2D structures."
 *
 * Example:
 *   Input:  matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
 *   Output: true
 */
