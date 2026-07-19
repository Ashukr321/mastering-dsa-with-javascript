// 29. Generate all the permutation of the string
// LeetCode: https://leetcode.com/problems/permutations/ (related)

/**
 * Pattern Used: Backtracking
 * Why this pattern: Generating every arrangement of characters requires exploring each choice, recursing on the remainder, and backtracking to try the next option.
 *
 * Interview Scenario:
 * "LeetCode 46 / 'permutations of a string' is a staple at Microsoft/Amazon to test recursive backtracking and state restoration."
 *
 * Example:
 *   Input:  str = "abc"
 *   Output: ["abc","acb","bac","bca","cab","cba"]
 */
