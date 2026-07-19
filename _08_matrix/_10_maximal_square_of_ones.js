// 10. Find the largest square of 1s in a binary matrix and return its area

/**
 * Pattern Used: Dynamic Programming (Matrix DP on Square Side Length)
 * Why this pattern: dp[i][j], the side length of the largest square ending at
 * cell (i, j), equals 1 plus the minimum of the dp values above, to the left,
 * and diagonally above-left, so the answer builds incrementally instead of
 * checking every possible square from scratch.
 *
 * Interview Scenario:
 * "Asked at Google/Facebook: 'Given a binary matrix representing a floor
 * plan of empty (1) and blocked (0) tiles, find the area of the largest
 * square of empty tiles that can be used for a room.'"
 *
 * Example:
 *   Input:  [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
 *   Output: 4
 */
