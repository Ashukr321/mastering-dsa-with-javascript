// 9. Find the BST Node Value Closest to a Given Target

/**
 * Pattern Used: BST Ordering Property Walk (Greedy Single-Path Descent)
 * Why this pattern: At each node, comparing its value to the target tells you
 * which single child branch could possibly hold a closer value, so a plain
 * O(h) descent - updating a running "closest so far" - suffices instead of
 * inspecting every node in the tree.
 *
 * Interview Scenario:
 * "A warm-up BST question about approximate search: given the root of a BST
 * and a target float value, return the value in the tree that is closest to
 * the target, in better than O(n) time."
 *
 * Example:
 *   Input:  root = [4,2,5,1,3], target = 3.714286
 *   Output: 4
 */
