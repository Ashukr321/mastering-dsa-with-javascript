// 2. Check string is palindrome or not
// LeetCode: https://leetcode.com/problems/valid-palindrome/

/**
 * Pattern Used: Two Pointers
 * Why this pattern: Comparing characters from both ends moving inward avoids creating a reversed copy of the string and runs in O(n) time with O(1) extra space.
 *
 * Interview Scenario:
 * "A classic Meta/Microsoft screening question used to see if a candidate can solve string comparison problems in-place without extra memory."
 *
 * Example:
 *   Input:  str = "racecar"
 *   Output: true
 */
