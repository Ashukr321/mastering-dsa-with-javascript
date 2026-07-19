// 21. Remove all duplicates from the input string
// LeetCode: https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/ (related)

/**
 * Pattern Used: Stack-based Duplicate Removal
 * Why this pattern: Pushing characters onto a stack and popping when the current character matches the top models adjacent-duplicate cancellation in one linear scan.
 *
 * Interview Scenario:
 * "LeetCode 1047 style question asked at Amazon to test stack-based simplification versus naive repeated-scan approaches."
 *
 * Example:
 *   Input:  str = "abbaca"
 *   Output: "ca"
 */
