// 7. Edit Distance (Minimum Operations to Convert One String to Another)
// LeetCode: https://leetcode.com/problems/edit-distance/

/**
 * Pattern Used: 2D Dynamic Programming (Grid DP)
 * Why this pattern: The minimum edits to transform a prefix of one string into
 * a prefix of another only depends on three smaller sub-problems (insert,
 * delete, replace one character), which map cleanly onto a 2D grid indexed by
 * both string lengths.
 *
 * Interview Scenario:
 * "Classic hard-ish DP question asked by companies building spell-checkers or
 * diff tools: given two strings, find the minimum number of insert, delete,
 * and replace operations needed to convert one into the other."
 *
 * Example:
 *   Input:  word1 = "horse", word2 = "ros"
 *   Output: 3 (horse -> rorse -> rose -> ros)
 */
