// 17. Find non repeating character in string
// LeetCode: https://leetcode.com/problems/first-unique-character-in-a-string/ (related)

/**
 * Pattern Used: Hashing / Frequency Map
 * Why this pattern: Counting frequencies first, then scanning again to find the first character with count 1, solves this in O(n) time with O(1) extra space for a fixed alphabet.
 *
 * Interview Scenario:
 * "This maps to LeetCode 387, a favorite at Bloomberg/Google to test two-pass hashing versus naive O(n^2) approaches."
 *
 * Example:
 *   Input:  str = "leetcode"
 *   Output: 'l'
 */
