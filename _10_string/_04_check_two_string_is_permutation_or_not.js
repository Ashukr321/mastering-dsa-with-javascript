// 4. Check two string is permutation or not
// LeetCode: https://leetcode.com/problems/permutation-in-string/ (related)

/**
 * Pattern Used: Hashing / Frequency Map
 * Why this pattern: Two strings are permutations of each other only if they contain exactly the same characters with the same counts, which a frequency map (or sorted comparison) verifies in O(n).
 *
 * Interview Scenario:
 * "Asked at Amazon as a follow-up to anagram questions to test whether candidates recognize that 'permutation of a string' and 'anagram' are the same underlying check."
 *
 * Example:
 *   Input:  s1 = "abc", s2 = "bca"
 *   Output: true
 */
