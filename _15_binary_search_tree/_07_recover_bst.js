// 7. Recover a BST Where Exactly Two Nodes Were Swapped by Mistake

/**
 * Pattern Used: BST Inorder Traversal Property (Detecting Out-of-Order Pairs)
 * Why this pattern: A correct BST's inorder traversal is strictly increasing,
 * so swapped nodes reveal themselves as one or two places where a value is
 * followed by a smaller one; tracking the previous node during traversal lets
 * you identify the two misplaced nodes and swap their values back in O(1)
 * extra space.
 *
 * Interview Scenario:
 * "A tricky 'find the bug in the data structure' style question: two nodes of
 * a BST were swapped by mistake, recover the tree without changing its
 * structure, ideally in O(1) extra space using Morris traversal."
 *
 * Example:
 *   Input:  root = [1,3,null,null,2]
 *   Output: [3,1,null,null,2]  (values of the two swapped nodes are fixed)
 */
