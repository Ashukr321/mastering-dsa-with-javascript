// 6. Jump Game (Reachability)

/**
 * Pattern Used: Greedy - Track Farthest Reachable Index
 * Why this pattern: Scanning left to right while keeping the farthest index
 * reachable so far greedily determines whether the last index can ever be
 * reached, without needing to explore every possible jump combination.
 *
 * Interview Scenario:
 * "You're given an array where each element represents the maximum jump
 * length from that position. Determine if you can reach the last index
 * starting from the first."
 *
 * Example:
 *   Input:  nums = [2, 3, 1, 1, 4]
 *   Output: true (jump 1 step from index 0 to 1, then 3 steps to the last index)
 */
