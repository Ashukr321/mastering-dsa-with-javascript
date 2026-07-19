// 5. Find the sum of the primary and secondary diagonal elements of a square matrix

/**
 * Pattern Used: Matrix Traversal (Diagonal Index Pattern)
 * Why this pattern: Primary diagonal elements satisfy i === j and secondary
 * diagonal elements satisfy i + j === n - 1, so both sums can be accumulated
 * in a single O(n) pass instead of scanning the whole O(n^2) matrix.
 *
 * Interview Scenario:
 * "Asked in interviews testing index-pattern recognition: 'Given a square
 * image mask, quickly compute the sum of pixels lying on either diagonal
 * without touching every pixel in the matrix.'"
 *
 * Example:
 *   Input:  [[1,2,3],[4,5,6],[7,8,9]]
 *   Output: 25 (primary: 1+5+9=15, secondary: 3+5+7=15, center 5 counted once)
 */
