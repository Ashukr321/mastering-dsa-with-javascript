// 14. Find the maximum of the binary tree

/**
 * Pattern Used: BST Rightmost-Node Traversal (Max via Structure)
 * Why this pattern: Mirrors the minimum search by following right pointers to the end, relying on the BST property that the largest value is always the rightmost node.
 *
 * Interview Scenario:
 * "Paired with min-node search in interviews to test if candidates see it as O(h) descent rather than an O(n) full-tree scan."
 *
 * Example:
 *   Input:      8
 *              / \
 *             3   10
 *                  \
 *                   14
 *   Output: 14
 */
