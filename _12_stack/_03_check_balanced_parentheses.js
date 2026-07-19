// 3. Check If An Expression Has Balanced Parentheses

/**
 * Pattern Used: Stack - Matching Pairs Simulation
 * Why this pattern: Every closing bracket must match the most recently seen
 * unmatched opening bracket, which is exactly the LIFO order a stack gives
 * you - push on open, pop and compare on close.
 *
 * Interview Scenario:
 * "Common compiler/parser-flavored warm-up: given a string containing only
 * '(' and ')', determine whether every opening bracket has a matching
 * closing bracket in the correct order, using a stack to track unmatched
 * opens."
 *
 * Example:
 *   Input:  expr = "(()())"
 *   Output: true (balanced)
 *
 *   Input:  expr = "(()"
 *   Output: false (one unmatched opening bracket)
 */
