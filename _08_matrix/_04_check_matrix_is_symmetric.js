// 4. Check whether a square matrix is symmetric (equal to its own transpose)

/**
 * Pattern Used: Matrix Traversal / Transpose Comparison
 * Why this pattern: A matrix is symmetric only if swapping rows and columns
 * leaves it unchanged, so comparing A[i][j] with A[j][i] for every pair (an
 * implicit transpose check without building a second matrix) tests the
 * property in a single pass.
 *
 * Interview Scenario:
 * "Asked when validating adjacency matrices for undirected graphs: 'Given a
 * matrix representing pairwise relationships between nodes, confirm it is
 * symmetric before treating it as an undirected graph's adjacency matrix.'"
 *
 * Example:
 *   Input:  [[1,2,3],[2,5,6],[3,6,9]]
 *   Output: true
 */
