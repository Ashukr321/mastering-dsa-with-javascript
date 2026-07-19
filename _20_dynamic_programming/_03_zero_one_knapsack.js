// 3. 0/1 Knapsack Problem

/**
 * Pattern Used: 0/1 Knapsack Pattern
 * Why this pattern: Each item can either be taken once or skipped entirely, so
 * the optimal value at a given capacity depends only on the best choice made
 * for the previous item at the same or reduced capacity, which builds up
 * naturally in a 2D (or rolling 1D) DP table.
 *
 * Interview Scenario:
 * "Foundational interview question for the whole knapsack family: given item
 * weights, item values, and a maximum bag capacity, find the maximum total
 * value you can carry without exceeding the capacity, using each item at
 * most once."
 *
 * Example:
 *   Input:  weights = [1, 3, 4, 5], values = [1, 4, 5, 7], capacity = 7
 *   Output: 9 (pick items with weight 3 and 4, value 4 + 5)
 */
