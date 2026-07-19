// 9. Generate All Combinations Of Well-Formed Parentheses For Given N Pairs

/**
 * Pattern Used: Backtracking - Choose/Explore/Unchoose With Open/Close Counters
 * Why this pattern: Adds an open paren whenever the open count is below n and
 * a close paren whenever it wouldn't exceed the open count, pruning any
 * branch that would ever produce an invalid (unbalanced) prefix.
 *
 * Interview Scenario:
 * "Common backtracking-with-counters interview question: given n pairs of
 * parentheses, generate all combinations of well-formed (balanced)
 * parentheses strings."
 *
 * Example:
 *   Input:  n = 3
 *   Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]
 */
