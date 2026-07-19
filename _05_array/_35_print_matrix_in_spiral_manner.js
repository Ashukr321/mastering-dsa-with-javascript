// 35. Print matrix in spiral manner
// LeetCode: https://leetcode.com/problems/spiral-matrix/
/**
 * Pattern Used: Matrix Traversal / Boundary Layer Simulation (Spiral Order)
 * Why this pattern: Printing a matrix in spiral order requires tracking four shrinking boundaries (top, bottom, left, right) and traversing each layer in order, which is a simulation-based traversal pattern rather than a search or sort.
 *
 * Interview Scenario:
 * "Asked at Amazon/Microsoft: 'Print the pixels of an image matrix in a spiral pattern from the outside in, as required by a legacy display driver.' Tests careful boundary-pointer bookkeeping."
 *
 * Example:
 *   Input:  [[1,2,3],[4,5,6],[7,8,9]]
 *   Output: [1,2,3,6,9,8,7,4,5]
 */
