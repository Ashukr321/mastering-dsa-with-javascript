// 2. Print the sum of the number 1 to n
/**
 * Pattern Used: Linear Recursion with Return-Value Accumulation
 * Why this pattern: Each call reduces the problem to sum(n-1) and combines it with the current value on the way back, a textbook example of building an accumulated result through return values instead of print statements.
 *
 * Interview Scenario:
 * "Frequently used as a 2-minute phone-screen filter question: 'Write a recursive function to find 1+2+...+n' before moving to harder DP questions."
 *
 * Example:
 *   Input:  n = 5
 *   Output: 15
 */
