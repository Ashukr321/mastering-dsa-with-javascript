// 1. Place N Queens On An N x N Chessboard So That No Two Queens Attack Each Other

/**
 * Pattern Used: Backtracking - Choose/Explore/Unchoose
 * Why this pattern: Places queens row by row and immediately backtracks
 * whenever a placement violates a column/diagonal constraint, pruning invalid
 * branches early instead of generating every possible board.
 *
 * Interview Scenario:
 * "Classic combinatorial constraint problem asked to test backtracking with
 * pruning: place N queens on an N x N board so that no two queens attack each
 * other, and return all distinct board arrangements."
 *
 * Example:
 *   Input:  n = 4
 *   Output: [
 *     [".Q..", "...Q", "Q...", "..Q."],
 *     ["..Q.", "Q...", "...Q", ".Q.."]
 *   ]
 */
