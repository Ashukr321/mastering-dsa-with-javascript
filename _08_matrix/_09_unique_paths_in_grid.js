// 9. Count the number of unique paths from top-left to bottom-right of a grid moving only right or down

/**
 * Pattern Used: Dynamic Programming (2D Grid Path Counting)
 * Why this pattern: The number of ways to reach any cell equals the sum of
 * the ways to reach the cell above it and the cell to its left, so building
 * up a DP table row by row avoids re-exploring the same paths exponentially.
 *
 * Interview Scenario:
 * "Asked at Amazon/Uber: 'A robot sitting at the top-left corner of a grid
 * can only move right or down; count how many distinct paths it can take to
 * reach the bottom-right corner.'"
 *
 * Example:
 *   Input:  m = 3, n = 2
 *   Output: 3
 */
