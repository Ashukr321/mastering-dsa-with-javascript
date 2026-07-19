// 43. Generate ALL Permutation of the array element
// LeetCode: https://leetcode.com/problems/permutations/
/**
 * Pattern Used: Backtracking (Permutation Generation)
 * Why this pattern: Generating all orderings of an array's elements requires exploring choices recursively and undoing (backtracking) each choice to try the next, which is the canonical backtracking pattern.
 *
 * Interview Scenario:
 * "Asked at Google/Microsoft: 'Given a small set of distinct task IDs, generate every possible execution order to test a scheduler.' Tests recursive backtracking with swap-based or visited-array based state management."
 *
 * Example:
 *   Input:  [1, 2, 3]
 *   Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */
