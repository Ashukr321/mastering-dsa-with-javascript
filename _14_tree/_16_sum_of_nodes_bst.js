// 16. Calculate the sum of node of the binary search tree

/**
 * Pattern Used: DFS Recursive Traversal (Sum Aggregation)
 * Why this pattern: Sums all node values via node.val + sum(left) + sum(right), the same aggregation template used for size/height but reducing with addition instead of count or max/min.
 *
 * Interview Scenario:
 * "Used to check if candidates can generalize a single recursive aggregation pattern across count, sum, max, min, and height questions instead of treating each as unrelated."
 *
 * Example:
 *   Input:      4
 *              / \
 *             2   7
 *            /
 *           1
 *   Output: 14
 */
