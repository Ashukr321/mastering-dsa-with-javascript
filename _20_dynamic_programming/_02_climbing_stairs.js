// 2. Climbing Stairs (Count Ways to Reach the Top)
// LeetCode: https://leetcode.com/problems/climbing-stairs/

/**
 * Pattern Used: 1D Dynamic Programming (Memoization/Tabulation)
 * Why this pattern: The number of ways to reach step n only depends on the
 * number of ways to reach steps n-1 and n-2, so it reduces to the same
 * recurrence as Fibonacci and can be solved bottom-up in O(n) time and O(1) space.
 *
 * Interview Scenario:
 * "Common first DP interview question: given n stairs where you can climb
 * either 1 or 2 steps at a time, count the distinct number of ways to reach
 * the top, and optimize the space from O(n) to O(1)."
 *
 * Example:
 *   Input:  n = 5
 *   Output: 8
 */
