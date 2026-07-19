// 11. Insertion of the node in the binary search tree
// LeetCode: https://leetcode.com/problems/insert-into-a-binary-search-tree/

/**
 * Pattern Used: Binary Search Tree Property (Ordered Insertion)
 * Why this pattern: Uses the BST invariant to decide at each step whether to recurse left or right, then attaches the new node at the first null slot found, keeping the ordering property intact.
 *
 * Interview Scenario:
 * "LeetCode 701-style question asked to confirm candidates can navigate a BST by comparison instead of scanning every node like in a plain binary tree."
 *
 * Example:
 *   Input:  BST: [4,2,7,1,3]; insert(5)
 *   Output: [4,2,7,1,3,5]  (5 attached as the left child of 7)
 */
