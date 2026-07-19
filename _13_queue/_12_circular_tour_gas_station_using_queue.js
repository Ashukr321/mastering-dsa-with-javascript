// 12. Circular Tour / Gas Station Using Queue Logic

/**
 * Pattern Used: Circular Queue Traversal / Greedy Prefix Sum
 * Why this pattern: Treating the gas stations as a circular queue and walking
 * forward while tracking a running fuel surplus lets you detect the single
 * feasible starting point in one O(n) pass, resetting the candidate start
 * whenever the running total goes negative.
 *
 * Interview Scenario:
 * "Given circular arrays of gas amounts and costs between stations, find the
 * starting station index from which a car can complete the full circular
 * tour without running out of fuel, or return -1 if none exists."
 *
 * Example:
 *   Input:  gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2]
 *   Output: 3 (starting at station index 3 completes the circuit)
 */
