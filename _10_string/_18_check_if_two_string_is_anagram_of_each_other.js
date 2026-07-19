// 18. Check if two string is anagram of each other
// LeetCode: https://leetcode.com/problems/valid-anagram/

/**
 * Pattern Used: Hashing / Frequency Map (Sort-based Alternative)
 * Why this pattern: Comparing sorted versions of both strings (or frequency maps) confirms they contain identical character multisets, the definition of an anagram.
 *
 * Interview Scenario:
 * "LeetCode 242, one of the most repeated easy questions across Meta, Amazon, and Bloomberg to gauge comfort with sorting vs hashing trade-offs."
 *
 * Example:
 *   Input:  s = "anagram", t = "nagaram"
 *   Output: true
 */
