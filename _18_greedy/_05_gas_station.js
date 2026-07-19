// 5. Gas Station Circular Tour

/**
 * Pattern Used: Greedy - Track Running Total, Reset Start on Deficit
 * Why this pattern: If the total gas is at least the total cost, a valid
 * starting station must exist; walking around once and resetting the
 * candidate start whenever the running tank goes negative greedily finds
 * that unique starting point in a single pass.
 *
 * Interview Scenario:
 * "There are n gas stations arranged in a circle, each with a gas amount and
 * a cost to travel to the next station. Determine the starting station index
 * from which you can complete the full circuit, or return -1 if impossible."
 *
 * Example:
 *   Input:  gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2]
 *   Output: 3 (starting at station index 3 allows completing the full circuit)
 */
