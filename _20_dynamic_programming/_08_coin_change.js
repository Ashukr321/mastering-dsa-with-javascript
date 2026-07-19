// 8. Coin Change (Minimum Number of Coins)
// LeetCode: https://leetcode.com/problems/coin-change/

/**
 * Pattern Used: 1D Dynamic Programming (Memoization/Tabulation)
 * Why this pattern: The minimum coins needed for amount n depends on the
 * minimum coins needed for amount n - coin for every coin denomination, so
 * building up the answer from smaller amounts avoids recomputation of shared
 * sub-problems.
 *
 * Interview Scenario:
 * "Common fintech-style interview question: given coin denominations and a
 * target amount, find the fewest number of coins needed to make that amount,
 * or report it's impossible."
 *
 * Example:
 *   Input:  coins = [1, 2, 5], amount = 11
 *   Output: 3 (5 + 5 + 1)
 */
