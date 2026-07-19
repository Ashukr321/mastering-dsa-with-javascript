// 25. Calculate the GCD
// LeetCode: https://leetcode.com/problems/find-greatest-common-divisor-of-array/ (similar)
/**
 * Pattern Used: Euclidean Algorithm Recursion (Tail Recursion)
 * Why this pattern: gcd(a, b) = gcd(b, a % b) with gcd(a, 0) = a is a naturally tail-recursive formulation of Euclid's algorithm, converging in O(log(min(a,b))) steps.
 *
 * Interview Scenario:
 * "A frequently asked math-recursion question (Goldman Sachs, Qualcomm) that also tests whether the candidate knows the time complexity of Euclid's algorithm versus naive subtraction-based GCD."
 *
 * Example:
 *   Input:  a = 48, b = 18
 *   Output: 6
 */
