// 2. Fractional Knapsack Problem

/**
 * Pattern Used: Greedy - Sort by Value-to-Weight Ratio
 * Why this pattern: Since items can be broken into fractions, always taking as
 * much as possible of the item with the highest value/weight ratio first
 * maximizes total value without needing to explore combinations like 0/1
 * knapsack's DP.
 *
 * Interview Scenario:
 * "You're packing a knapsack of limited weight capacity and, unlike the
 * classic 0/1 knapsack, you're allowed to take fractional amounts of each
 * item. Maximize the total value that can be carried."
 *
 * Example:
 *   Input:  items = [{value: 60, weight: 10}, {value: 100, weight: 20}, {value: 120, weight: 30}], capacity = 50
 *   Output: 240 (take all of item 1 & 2, and 2/3 of item 3)
 */
