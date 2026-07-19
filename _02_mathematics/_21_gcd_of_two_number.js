// 21. GCD of two numbers
// LeetCode: https://leetcode.com/problems/find-greatest-common-divisor-of-array/ (similar)
/**
 * Pattern Used: Euclidean Algorithm
 * Why this pattern: The GCD is found by repeatedly replacing `(a, b)` with `(b, a % b)` until the remainder is 0,
 * exploiting the identity `gcd(a, b) = gcd(b, a % b)` for an O(log(min(a,b))) solution instead of brute-force checking.
 *
 * Interview Scenario:
 * "A foundational algorithm question (related to LeetCode 1979): compute the greatest common divisor of two
 * numbers -- interviewers watch for whether a candidate reaches for the efficient Euclidean algorithm over
 * a naive O(min(a,b)) divisor scan."
 *
 * Example:
 *   Input:  a = 48, b = 18
 *   Output: 6
 */
