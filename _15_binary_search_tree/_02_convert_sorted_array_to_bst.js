// 2. Convert a Sorted Array into a Height-Balanced Binary Search Tree

/**
 * Pattern Used: Recursive BST Construction (Divide and Conquer on the Middle Element)
 * Why this pattern: Picking the middle element of the sorted array as the root
 * and recursing on the left and right halves guarantees the resulting BST
 * stays height-balanced, since each recursive call splits the remaining
 * elements as evenly as possible.
 *
 * Interview Scenario:
 * "Frequently paired with the 'convert sorted array to BST' prompt: given an
 * array sorted in ascending order, build any height-balanced BST from it, and
 * explain why the choice of middle element matters for balance."
 *
 * Example:
 *   Input:  nums = [-10, -3, 0, 5, 9]
 *   Output: [0, -3, 9, -10, null, 5]  (one valid height-balanced BST)
 */
