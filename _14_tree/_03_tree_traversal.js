// 3. Tree traversal preorder, postOrder, inorder
// LeetCode: https://leetcode.com/problems/binary-tree-preorder-traversal/
// LeetCode: https://leetcode.com/problems/binary-tree-inorder-traversal/
// LeetCode: https://leetcode.com/problems/binary-tree-postorder-traversal/

/**
 * Pattern Used: DFS Recursive Traversal (Pre-order / In-order / Post-order)
 * Why this pattern: Each traversal is a depth-first walk that differs only in when the current node's value is visited relative to its left and right subtree recursive calls, which is the canonical way to linearize a tree.
 *
 * Interview Scenario:
 * "Nearly universal warm-up question at FAANG-style onsites: 'print the tree in in-order/pre-order/post-order' to check you understand recursion order and can adapt it to iterative stack-based versions on request."
 *
 * Example:
 *   Input:      1
 *              / \
 *             2   3
 *            /
 *           4
 *   Output: Pre-order: [1,2,4,3]  In-order: [4,2,1,3]  Post-order: [4,2,3,1]
 */
