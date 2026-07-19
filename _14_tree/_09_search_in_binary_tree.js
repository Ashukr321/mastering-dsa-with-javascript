// 9. Search in the binary tree

/**
 * Pattern Used: DFS Recursive Traversal (Unordered Linear Search)
 * Why this pattern: Since a plain binary tree has no ordering guarantee, finding a target requires visiting every node in the worst case, typically via recursive pre-order DFS with early return on match.
 *
 * Interview Scenario:
 * "Often asked right before the BST-search variant so the interviewer can contrast O(n) unordered search with O(log n) ordered search and see if the candidate articulates the difference."
 *
 * Example:
 *   Input:      5
 *              / \
 *             9   3
 *                /
 *               12   ; search(7)
 *   Output: false (7 not found; would require visiting all 4 nodes to confirm)
 */
