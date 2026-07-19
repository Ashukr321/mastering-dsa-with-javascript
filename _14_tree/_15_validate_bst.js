// 15. Check the tree is bst or not invalid bst
// LeetCode: https://leetcode.com/problems/validate-binary-search-tree/

/**
 * Pattern Used: Binary Search Tree Property (Range-Bounded DFS Validation)
 * Why this pattern: Validates the BST invariant recursively by passing down a shrinking (min, max) bound for each subtree, catching violations a simple 'compare with immediate children only' check would miss.
 *
 * Interview Scenario:
 * "One of the most commonly asked tree questions (LeetCode 98) precisely because the naive local-comparison solution is wrong; interviewers use it to see if you catch the bug yourself."
 *
 * Example:
 *   Input:      5
 *              / \
 *             1   4
 *                / \
 *               3   6
 *   Output: false (node 4's left child 3 is less than 4 but the whole right subtree of 5 must be > 5, and 3 < 5 violates it)
 */
