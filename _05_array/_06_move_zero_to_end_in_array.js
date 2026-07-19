// 6. Move zero to end in array
// LeetCode: https://leetcode.com/problems/move-zeroes/
/**
 * Pattern Used: Two Pointers (Read/Write Pointer)
 * Why this pattern: A slow (write) pointer tracks the next non-zero slot while a fast (read) pointer scans the array, allowing an in-place rearrangement in a single pass.
 *
 * Interview Scenario:
 * "Asked at Google/Amazon phone screens: 'Given an array of sensor readings where 0 means no signal, move all zeros to the end while preserving the order of non-zero readings, in-place.' Tests in-place array manipulation without extra memory."
 *
 * Example:
 *   Input:  [0, 1, 0, 3, 12]
 *   Output: [1, 3, 12, 0, 0]
 */
