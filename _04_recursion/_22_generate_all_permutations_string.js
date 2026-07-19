// 22. Generate all the permutation of the string using recursion
// LeetCode: https://leetcode.com/problems/permutations/ (related)
/**
 * Pattern Used: Backtracking
 * Why this pattern: Each recursive call picks one remaining character to place next, recurses on the rest, and then 'un-picks' it to try the next option, the defining choose-explore-unchoose loop of backtracking.
 *
 * Interview Scenario:
 * "A very common medium-level interview question (Amazon, Adobe, Goldman Sachs) used to test backtracking fundamentals before moving on to harder constraint-based backtracking like N-Queens or Sudoku."
 *
 * Example:
 *   Input:  str = "abc"
 *   Output: ["abc","acb","bac","bca","cab","cba"]
 */
