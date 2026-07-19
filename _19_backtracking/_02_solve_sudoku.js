// 2. Fill A Partially Filled 9x9 Sudoku Board So Every Row, Column And 3x3 Box Contains 1-9 Exactly Once

/**
 * Pattern Used: Constraint Satisfaction Backtracking
 * Why this pattern: Tries digits 1-9 in each empty cell, validates the
 * row/column/3x3-box constraints before committing a digit, and backtracks
 * the moment a placement makes the rest of the board unsolvable.
 *
 * Interview Scenario:
 * "Common 'hard' backtracking interview question: given a 9x9 Sudoku board
 * with some cells pre-filled, fill in the remaining empty cells in place so
 * the board satisfies all Sudoku rules."
 *
 * Example:
 *   Input:  board = [
 *     ["5","3",".",".","7",".",".",".","."],
 *     ["6",".",".","1","9","5",".",".","."],
 *     [".","9","8",".",".",".",".","6","."],
 *     ...
 *   ]
 *   Output: board mutated in place into a fully solved, valid 9x9 Sudoku grid
 */
