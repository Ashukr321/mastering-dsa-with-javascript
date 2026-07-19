// 3. If an element in a matrix is 0, set its entire row and column to 0

/**
 * Pattern Used: In-place Marking (Row/Column State Encoding)
 * Why this pattern: Instead of allocating extra O(m+n) arrays to remember
 * which rows/columns must be zeroed, the first row and first column of the
 * matrix itself can be repurposed as markers, giving O(1) extra space.
 *
 * Interview Scenario:
 * "Frequent Facebook/Amazon question: 'Given a spreadsheet-like grid,
 * whenever a cell is 0, wipe out its whole row and column, but do it without
 * allocating extra memory proportional to the grid size.'"
 *
 * Example:
 *   Input:  [[1,1,1],[1,0,1],[1,1,1]]
 *   Output: [[1,0,1],[0,0,0],[1,0,1]]
 */
