// 42. Move negative number one side in array
/**
 * Pattern Used: Two Pointers (Partitioning)
 * Why this pattern: Negative numbers are segregated to one side using a two-pointer partition pass, similar to the partition step of quicksort, achieving the rearrangement in-place in O(n) time.
 *
 * Interview Scenario:
 * "Asked at Flipkart/Adobe as a rearrangement fundamentals check: 'Rearrange an array of profit/loss entries so all losses appear before gains, in-place.' Tests the same partitioning pattern used in Dutch National Flag and quicksort."
 *
 * Example:
 *   Input:  [-1, 2, -3, 4, 5, -6]
 *   Output: [-1, -3, -6, 2, 4, 5]
 */
