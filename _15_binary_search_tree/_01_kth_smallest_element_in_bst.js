// 1. Find the Kth Smallest Element in a Binary Search Tree

/**
 * Pattern Used: BST Inorder Traversal Property
 * Why this pattern: An inorder traversal of a BST visits nodes in strictly
 * ascending sorted order, so counting nodes as they are visited lets you stop
 * exactly at the kth visit without sorting anything externally.
 *
 * Interview Scenario:
 * "A common BST follow-up to validate BST: given the root of a BST and an
 * integer k, return the kth smallest value in the tree. Be ready to discuss
 * how you'd optimize for repeated queries by augmenting nodes with subtree
 * counts."
 *
 * Example:
 *   Input:  root = [5,3,6,2,4,null,null,1], k = 3
 *   Output: 3
 */
