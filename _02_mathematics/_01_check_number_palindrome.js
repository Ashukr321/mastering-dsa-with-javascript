// 1. Check if a number is a palindrome or not
// LeetCode: https://leetcode.com/problems/palindrome-number/
/**
 * Pattern Used: Digit Reversal via Modulo/Division
 * Why this pattern: A palindrome check on a number is done by peeling off digits with `% 10` and rebuilding the
 * reversed number with `* 10 + digit`, then comparing the reversed value to the original -- no string conversion needed.
 *
 * Interview Scenario:
 * "A frequent numeric-reasoning warm-up (LeetCode 9): can you check if an integer reads the same forwards and
 * backwards without converting it to a string, and how do you handle negative numbers which can never be palindromes?"
 *
 * Example:
 *   Input:  121
 *   Output: true
 */
