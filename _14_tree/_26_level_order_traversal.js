// 26. Print the tree node data using level order traversal ( uses queue Ds) ?
// LeetCode: https://leetcode.com/problems/binary-tree-level-order-traversal/

/**
 * Pattern Used: BFS Level Order Traversal (Queue)
 * Why this pattern: Visits nodes level by level using a FIFO queue: dequeue a node, record its value, enqueue its children, repeating until the queue empties - the standard breadth-first approach to trees.
 *
 * Interview Scenario:
 * "One of the most-asked tree questions overall (LeetCode 102); interviewers use it to confirm candidates default to a queue for breadth-first problems instead of trying to force recursion."
 *
 * Example:
 *   Input:      3
 *              / \
 *             9  20
 *                /  \
 *               15   7
 *   Output: [[3], [9, 20], [15, 7]]
 */
