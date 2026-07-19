// 8. Check string is palindrome or not
// LeetCode: https://leetcode.com/problems/valid-palindrome/
/**
 * Pattern Used: Two-Pointer Recursion
 * Why this pattern: Comparing the first and last characters and recursing inward on the substring between them is a natural recursive analogue of the iterative two-pointer palindrome check.
 *
 * Interview Scenario:
 * "Frequently asked at product-based companies (Flipkart, Paytm) as a quick recursion + string check combo question, often with the follow-up 'now do it in O(1) extra space using indices instead of substrings'."
 *
 * Example:
 *   Input:  str = "madam"
 *   Output: true
 */
