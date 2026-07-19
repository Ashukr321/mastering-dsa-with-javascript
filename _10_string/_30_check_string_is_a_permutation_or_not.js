// 30. Check string is a permutation or not
// LeetCode: https://leetcode.com/problems/permutation-in-string/

/**
 * Pattern Used: Sliding Window + Hashing (Frequency Map)
 * Why this pattern: Checking whether one string's characters can be rearranged to match a window inside another combines a frequency map with a fixed-size sliding window comparison.
 *
 * Interview Scenario:
 * "LeetCode 567 (Permutation in String), commonly asked at Google/Facebook to test combining sliding window with frequency-count comparison for O(n) solutions."
 *
 * Example:
 *   Input:  s1 = "ab", s2 = "eidbaooo"
 *   Output: true
 */
