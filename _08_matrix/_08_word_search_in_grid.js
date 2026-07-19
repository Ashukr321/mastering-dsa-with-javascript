// 8. Determine if a given word can be formed by sequentially adjacent cells in a grid of letters

/**
 * Pattern Used: DFS/Backtracking on Grid
 * Why this pattern: Each candidate starting cell triggers a DFS that tries
 * to match the next character in one of 4 directions, backtracking (un-
 * marking visited cells) whenever a path fails to continue matching the word.
 *
 * Interview Scenario:
 * "Common Microsoft/Amazon question: 'Given a Boggle-style letter grid,
 * check whether a target word can be traced out using adjacent (non-
 * diagonal, non-reused) cells.'"
 *
 * Example:
 *   Input:  board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 *   Output: true
 */
