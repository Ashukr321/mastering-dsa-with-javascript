// 5. Longest Common Subsequence
// LeetCode: https://leetcode.com/problems/longest-common-subsequence/

/**
 * Pattern Used: Longest Common Subsequence Pattern
 * Why this pattern: The LCS of two strings depends only on whether their last
 * characters match, reducing to smaller LCS sub-problems on shorter prefixes,
 * which fits a classic 2D DP grid over the two string lengths.
 *
 * Interview Scenario:
 * "Frequently asked string DP question, and the base pattern behind diffing
 * tools: given two strings, find the length of their longest subsequence that
 * appears in both, without requiring the characters to be contiguous."
 *
 * Example:
 *   Input:  text1 = "abcde", text2 = "ace"
 *   Output: 3 ("ace")
 */
