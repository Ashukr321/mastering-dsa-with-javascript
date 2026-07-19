// 1. Check string anagram or not
// LeetCode: https://leetcode.com/problems/valid-anagram/

/**
 * Pattern Used: Hashing / Frequency Map
 * Why this pattern: Anagram detection is efficiently solved by counting character frequencies in both strings and comparing the maps (or sorting), avoiding O(n^2) pairwise comparisons.
 *
 * Interview Scenario:
 * "Frequently asked at Amazon and Google as a warm-up string question to test whether the candidate reaches for frequency counting instead of nested loops or unnecessary sorting."
 *
 * Example:
 *   Input:  s1 = "listen", s2 = "silent"
 *   Output: true
 */
