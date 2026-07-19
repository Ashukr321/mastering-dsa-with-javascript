// 8. Minimum of the binary tree

/**
 * Pattern Used: DFS Recursive Traversal (Min Reduction)
 * Why this pattern: Mirrors the maximum-finding logic but reduces to the smallest value across all nodes, again requiring a full traversal since the tree is not assumed to be ordered.
 *
 * Interview Scenario:
 * "Paired with the maximum question in interviews to see if the candidate recognizes the symmetry and reuses the same recursive skeleton instead of rewriting logic from scratch."
 *
 * Example:
 *   Input:      5
 *              / \
 *             9   3
 *                /
 *               12
 *   Output: 3
 */
