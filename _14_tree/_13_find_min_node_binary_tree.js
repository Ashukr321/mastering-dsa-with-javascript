// 13. Find the min node of the binary tree

/**
 * Pattern Used: BST Leftmost-Node Traversal (Min via Structure)
 * Why this pattern: On an ordered tree, the minimum value always lives at the leftmost node, so the search follows left pointers until hitting null instead of comparing every node's value.
 *
 * Interview Scenario:
 * "Frequently asked as a precursor to BST deletion, since removing a node with two children requires finding the in-order successor via this exact leftmost-descent technique."
 *
 * Example:
 *   Input:      8
 *              / \
 *             3   10
 *            /
 *           1
 *   Output: 1
 */
