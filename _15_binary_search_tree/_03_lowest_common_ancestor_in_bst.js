// 3. Find the Lowest Common Ancestor of Two Nodes in a BST

/**
 * Pattern Used: BST Ordering Property Walk (Single-Pass Divergence Point)
 * Why this pattern: Because every node's left subtree is smaller and right
 * subtree is larger, you can walk down from the root and the first node where
 * the two target values fall on different sides (or match the node) is
 * guaranteed to be their lowest common ancestor, avoiding a full binary-tree
 * LCA search.
 *
 * Interview Scenario:
 * "Asked to test whether you'll blindly reuse the generic binary tree LCA
 * algorithm or notice the BST property lets you solve it in O(h) time with no
 * extra recursion into both subtrees: given a BST and two node values, find
 * their lowest common ancestor."
 *
 * Example:
 *   Input:  root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
 *   Output: 6
 */
