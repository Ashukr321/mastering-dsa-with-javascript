// 19. Check if two string matches on string contains wildcard character
// LeetCode: https://leetcode.com/problems/wildcard-matching/ (related)

/**
 * Pattern Used: Dynamic Programming (Wildcard Matching)
 * Why this pattern: Matching strings against patterns with '?' and '*' requires tracking multiple possible alignments, which a DP table (or backtracking with pointers) handles efficiently.
 *
 * Interview Scenario:
 * "LeetCode 44, a hard-tier favorite at Google/Amazon to separate candidates who can design a 2D DP recurrence from those who only know brute-force recursion."
 *
 * Example:
 *   Input:  s = "aa", p = "*"
 *   Output: true
 */
