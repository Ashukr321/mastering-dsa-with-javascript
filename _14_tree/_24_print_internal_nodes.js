// 24. Print all the internal nodes of the tree ?

/**
 * Pattern Used: DFS Recursive Traversal (Node Classification Filter)
 * Why this pattern: Walks the tree recursively and collects a node only when it has at least one child, combining a standard DFS traversal with a filtering condition applied at each visit.
 *
 * Interview Scenario:
 * "Used to test whether a candidate can bolt a conditional filter onto a traversal template rather than needing an entirely new algorithm for every small variant of 'print nodes matching X'."
 *
 * Example:
 *   Input:      1
 *              / \
 *             2   3
 *            /
 *           4
 *   Output: [1, 2]
 */
