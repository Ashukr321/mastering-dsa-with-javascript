// 7. Reverse the string using recursion
// LeetCode: https://leetcode.com/problems/reverse-string/
/**
 * Pattern Used: Divide and Conquer (String Reduction Recursion)
 * Why this pattern: The string is reversed by processing one character at a time (removing it from the front and appending it at the end of the recursive result), reducing the problem size by one on each call.
 *
 * Interview Scenario:
 * "A common warm-up at Microsoft and Adobe interviews to test string manipulation without built-in reverse methods: 'Reverse a string using recursion, no loops or library functions.'"
 *
 * Example:
 *   Input:  str = "hello"
 *   Output: "olleh"
 */
