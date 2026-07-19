// 28. find the diameter of the binary tree
// LeetCode: https://leetcode.com/problems/diameter-of-binary-tree/

/**
 * Pattern Used: DFS Recursive Traversal (Height + Diameter Combined Recursion)
 * Why this pattern: Computes each node's height bottom-up while simultaneously tracking the best diameter seen so far as left height + right height, avoiding the O(n^2) trap of recomputing height separately at every node.
 *
 * Interview Scenario:
 * "LeetCode 543, a classic 'combine two recursions into one pass' question used to test if the candidate spots the naive O(n^2) solution's inefficiency and optimizes to O(n)."
 *
 * Example:
 *   Input:      1
 *              / \
 *             2   3
 *            /  \
 *           4    5
 *   Output: 3 (the longest path is 4-2-1-3 or 5-2-1-3, i.e. 3 edges)
 */
