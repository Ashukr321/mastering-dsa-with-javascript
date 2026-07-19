// 7. Determine If A Given Word Can Be Constructed From Adjacent Letters In A 2D Grid

/**
 * Pattern Used: Backtracking - Choose/Explore/Unchoose On A Grid (DFS With Visited Marking)
 * Why this pattern: Searches from every cell matching the word's first
 * letter, recursing into unvisited neighbors while the path keeps matching,
 * and unmarks the cell on backtrack so it can be reused by a different search
 * path.
 *
 * Interview Scenario:
 * "Popular grid DFS/backtracking interview question: given an m x n board of
 * characters and a word, determine if the word can be formed by a sequence of
 * adjacent (horizontally or vertically) cells without reusing the same cell
 * twice."
 *
 * Example:
 *   Input:  board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 *   Output: true
 */
