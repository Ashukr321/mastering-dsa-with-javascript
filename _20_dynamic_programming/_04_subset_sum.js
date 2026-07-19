// 4. Subset Sum Problem

/**
 * Pattern Used: 0/1 Knapsack Pattern
 * Why this pattern: Deciding whether to include or exclude each number to hit
 * an exact target sum is a Boolean variant of 0/1 knapsack, where the DP state
 * tracks which sums are achievable using a prefix of the array.
 *
 * Interview Scenario:
 * "Asked to test knapsack-style thinking on a yes/no question: given a set of
 * positive integers and a target sum, determine whether any subset of the
 * array adds up exactly to the target."
 *
 * Example:
 *   Input:  arr = [3, 34, 4, 12, 5, 2], target = 9
 *   Output: true (4 + 5 = 9)
 */
