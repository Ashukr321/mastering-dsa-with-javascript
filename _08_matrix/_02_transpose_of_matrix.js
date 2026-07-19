// 2. Compute the transpose of a matrix (swap rows and columns)

/**
 * Pattern Used: Matrix Traversal (Row-Column Index Swap)
 * Why this pattern: The transpose simply swaps the element at [i][j] with
 * [j][i], a direct traversal-and-swap operation that is often the first
 * building block before rotation or symmetry-check problems.
 *
 * Interview Scenario:
 * "Common warm-up question at any product company: 'Given a matrix, return
 * its transpose,' frequently used as the setup step before asking you to
 * rotate the matrix in-place or check if it is symmetric."
 *
 * Example:
 *   Input:  [[1,2,3],[4,5,6]]
 *   Output: [[1,4],[2,5],[3,6]]
 */
