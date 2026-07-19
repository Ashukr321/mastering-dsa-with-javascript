// 7. Maximum of the binary tree

/**
 * Pattern Used: DFS Recursive Traversal (Max Reduction)
 * Why this pattern: Finds the largest value by recursively reducing max(node.val, max(left), max(right)) over an unordered binary tree, since there is no BST property to prune the search.
 *
 * Interview Scenario:
 * "Interviewers use this to check candidates don't assume BST ordering when the prompt only says 'binary tree' - a classic trap that leads to wrong shortcut solutions."
 *
 * Example:
 *   Input:      5
 *              / \
 *             9   3
 *                /
 *               12
 *   Output: 12
 */
