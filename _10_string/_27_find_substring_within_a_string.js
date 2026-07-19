// 27. Write a program to find substring within a string, if found display position
// LeetCode: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

/**
 * Pattern Used: Brute Force Pattern Matching
 * Why this pattern: Sliding a window of the needle's length across the haystack and comparing characters at each offset is the brute-force approach to substring search.
 *
 * Interview Scenario:
 * "A precursor to KMP/Rabin-Karp, asked at Bloomberg/Amazon to confirm the candidate can implement O(n*m) matching correctly before optimizing."
 *
 * Example:
 *   Input:  str = "hello world", sub = "world"
 *   Output: 6
 */
