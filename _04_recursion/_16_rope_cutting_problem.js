// 16. Rope cutting problem
/**
 * Pattern Used: Recursive Tree / Multiple Branching (Optimization Recursion, DP candidate)
 * Why this pattern: At each step the rope can be cut into any of several allowed lengths, so the function branches into multiple recursive calls per cut choice and takes the best result, which is the classic setup for later converting to dynamic programming.
 *
 * Interview Scenario:
 * "A frequently asked Amazon/Flipkart interview problem to bridge recursion into dynamic programming: 'Given a rope of length n and allowed cut sizes, maximize the number of pieces (or product of pieces).'"
 *
 * Example:
 *   Input:  n = 5, allowed cuts = [2, 3]
 *   Output: 2  (cut into pieces of 2 and 3)
 */
