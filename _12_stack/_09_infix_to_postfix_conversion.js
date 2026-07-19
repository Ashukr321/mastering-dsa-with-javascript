// 9. Convert An Infix Expression To Postfix Notation

/**
 * Pattern Used: Stack - Operator Precedence Resolution (Shunting-Yard Style)
 * Why this pattern: Operators must wait on a stack until an operator of
 * lower-or-equal precedence (or a closing bracket) forces them to be popped
 * into the output, so a stack is exactly what's needed to reorder operators
 * relative to their operands while respecting precedence and associativity.
 *
 * Interview Scenario:
 * "Compiler-design-flavored question: given a human-readable infix
 * expression like 'a+b*c', convert it to postfix 'abc*+' using a stack to
 * hold operators until precedence rules say they should be emitted."
 *
 * Example:
 *   Input:  expr = "a+b*c-d"
 *   Output: "abc*+d-"
 */
