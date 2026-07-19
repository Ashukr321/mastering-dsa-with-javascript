// 1. Fibonacci Number Using Memoization
// LeetCode: https://leetcode.com/problems/fibonacci-number/

/**
 * Pattern Used: 1D Dynamic Programming (Top-Down Memoization)
 * Why this pattern: The naive recursive solution recomputes the same
 * sub-problems exponentially many times, so caching each Fibonacci(n) result
 * the first time it's computed collapses the runtime from O(2^n) to O(n).
 *
 * Interview Scenario:
 * "Classic warm-up question interviewers use to introduce memoization: given
 * n, return the nth Fibonacci number, then explain why the plain recursive
 * version is exponential and how caching fixes it."
 *
 * Example:
 *   Input:  n = 10
 *   Output: 55
 */
