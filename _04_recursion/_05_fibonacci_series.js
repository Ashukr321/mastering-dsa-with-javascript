// 5. Calculate the Fibonacci series of the number
// LeetCode: https://leetcode.com/problems/fibonacci-number/
/**
 * Pattern Used: Recursive Tree / Multiple Branching (Exponential Recursion)
 * Why this pattern: Each call to fib(n) branches into two further calls, fib(n-1) and fib(n-2), forming a binary recursion tree with overlapping subproblems, a classic setup interviewers use to introduce memoization.
 *
 * Interview Scenario:
 * "A staple at almost every FAANG interview to test if the candidate can spot exponential time complexity and then optimize it with memoization or DP - 'Compute the nth Fibonacci number, then optimize your solution.'"
 *
 * Example:
 *   Input:  n = 6
 *   Output: 8  (series: 0, 1, 1, 2, 3, 5, 8)
 */
