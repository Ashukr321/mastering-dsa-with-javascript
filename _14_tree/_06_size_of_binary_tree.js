// 6. Calculate the size of the binary tree

/**
 * Pattern Used: DFS Recursive Traversal (Count Aggregation)
 * Why this pattern: Counts nodes by recursively summing 1 + size(left) + size(right), the standard divide-and-conquer template for aggregating a value across an entire tree.
 *
 * Interview Scenario:
 * "A frequent 'can you write recursion from scratch' filter question, often followed by 'now do it iteratively with a stack/queue' to test flexibility beyond the recursive base case."
 *
 * Example:
 *   Input:      1
 *              / \
 *             2   3
 *            /
 *           4
 *   Output: 4
 */
