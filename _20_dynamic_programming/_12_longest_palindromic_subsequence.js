// 12. Longest Palindromic Subsequence
// LeetCode: https://leetcode.com/problems/longest-palindromic-subsequence/

/**
 * Pattern Used: Longest Common Subsequence Pattern
 * Why this pattern: The longest palindromic subsequence of a string equals
 * the longest common subsequence between that string and its reverse, so it
 * reuses the same 2D LCS grid DP with a different pair of input strings.
 *
 * Interview Scenario:
 * "Asked as a twist on LCS to test pattern-recognition skills: given a
 * string, find the length of the longest subsequence that reads the same
 * forwards and backwards."
 *
 * Example:
 *   Input:  s = "bbbab"
 *   Output: 4 ("bbbb")
 */
