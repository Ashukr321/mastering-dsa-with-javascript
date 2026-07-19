// 10. What are the binary search tree

/**
 * Pattern Used: Binary Search Tree Property (Conceptual Model)
 * Why this pattern: Defines the core BST invariant - every left subtree holds values less than the node and every right subtree holds values greater - which is what enables O(log n) search/insert/delete on a balanced instance.
 *
 * Interview Scenario:
 * "A conceptual checkpoint before coding: 'what property must hold for a binary tree to be a valid BST, and why does that give us logarithmic search time?'"
 *
 * Example:
 *   Input:      8
 *              / \
 *             3   10
 *            / \    \
 *           1   6    14
 *   Output: Valid BST - every left descendant < node < every right descendant, for all nodes
 */
