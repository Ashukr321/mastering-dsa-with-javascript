// 30. Move all negative to 1 size of the array
/**
 * Pattern Used: Two Pointers (Partitioning)
 * Why this pattern: Negative numbers can be pushed to one side of the array using a two-pointer partition scheme similar to the partition step in quicksort, in a single in-place pass.
 *
 * Interview Scenario:
 * "Asked at Amazon/Flipkart: 'Rearrange an array of temperature deltas so all negative values come before non-negative ones, in-place.' Tests the partitioning pattern used across sorting and rearrangement problems."
 *
 * Example:
 *   Input:  [1, -2, 3, -4, 5, -6]
 *   Output: [-2, -4, -6, 1, 3, 5]
 */
