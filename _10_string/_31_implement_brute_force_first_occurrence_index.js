// 31. Implement brute force first occurrence index of string matching algo
// LeetCode: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

/**
 * Pattern Used: Brute Force Pattern Matching
 * Why this pattern: Explicitly implementing the naive O(n*m) substring search (checking every start index) builds intuition before learning KMP/Z-algorithm optimizations.
 *
 * Interview Scenario:
 * "Asked at Bloomberg/Amazon as an implementation-detail follow-up to 'find the first occurrence', testing whether the candidate can code brute-force matching cleanly and handle edge cases."
 *
 * Example:
 *   Input:  haystack = "mississippi", needle = "issip"
 *   Output: 4
 */
