// 27. print reverse level order tree traversal using queue and stack Ds ?
// LeetCode: https://leetcode.com/problems/binary-tree-level-order-traversal-ii/

/**
 * Pattern Used: BFS Level Order Traversal (Queue) + Stack-Based Reversal
 * Why this pattern: Performs the same queue-driven level order BFS, then reverses the collected levels (via a stack or array reverse) so the deepest level is emitted first - combining two simple data structures for a new output order.
 *
 * Interview Scenario:
 * "LeetCode 107 variant asked to see if candidates realize they don't need a new traversal algorithm, just a reversal step layered on top of standard level order BFS."
 *
 * Example:
 *   Input:      3
 *              / \
 *             9  20
 *                /  \
 *               15   7
 *   Output: [[15, 7], [9, 20], [3]]
 */
