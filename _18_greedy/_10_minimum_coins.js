// 10. Minimum Number of Coins for a Given Amount

/**
 * Pattern Used: Greedy - Largest Denomination First
 * Why this pattern: Repeatedly picking the largest coin denomination that
 * doesn't exceed the remaining amount minimizes the coin count quickly, but
 * this greedy choice only guarantees an optimal answer for canonical coin
 * systems (like standard currency); non-canonical systems require DP instead.
 *
 * Interview Scenario:
 * "Given a set of coin denominations and a target amount, find the minimum
 * number of coins needed to make that amount, assuming an unlimited supply of
 * each denomination and a standard (canonical) currency system."
 *
 * Example:
 *   Input:  coins = [1, 2, 5, 10, 20, 50, 100], amount = 93
 *   Output: 5 (100 doesn't fit; 50 + 20 + 20 + 2 + 1 = 93 using 5 coins)
 */
