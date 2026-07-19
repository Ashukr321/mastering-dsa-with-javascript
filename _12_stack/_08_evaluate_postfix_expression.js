// 8. Evaluate A Postfix (Reverse Polish) Expression

/**
 * Pattern Used: Stack - Operand/Operator Evaluation
 * Why this pattern: In postfix notation every operator immediately follows
 * its operands, so pushing operands and, on seeing an operator, popping the
 * last two operands to apply it and pushing the result back naturally
 * evaluates the expression in a single left-to-right pass.
 *
 * Interview Scenario:
 * "Common calculator/compiler-flavored question: given a postfix expression
 * as tokens (e.g. from a simple calculator backend), evaluate it using a
 * stack and explain why postfix avoids the need for operator precedence
 * rules or parentheses."
 *
 * Example:
 *   Input:  tokens = ["2", "3", "1", "*", "+", "9", "-"]
 *   Output: -4  (2 + (3 * 1) - 9 = -4)
 */
