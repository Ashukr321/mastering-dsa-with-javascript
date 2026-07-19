// 12. Search in the binary search tree
// LeetCode: https://leetcode.com/problems/search-in-a-binary-search-tree/

/**
 * Pattern Used: Binary Search Tree Property (Ordered Search / Elimination)
 * Why this pattern: Exploits the BST ordering to discard an entire subtree at every step (go left if target is smaller, right if larger), giving O(log n) average search versus O(n) in an unordered tree.
 *
 * Interview Scenario:
 * "Classic 'binary search on a tree' question (LeetCode 700) used to test if the candidate connects binary search array logic to tree structures."
 *
 * Example:
 *   Input:  BST: [4,2,7,1,3]; search(2)
 *   Output: {val: 2, left: {val:1}, right: {val:3}}
 */
