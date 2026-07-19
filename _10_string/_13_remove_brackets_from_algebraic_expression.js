// 13. Remove brackets from algebraic expression

/**
 * Pattern Used: Stack-based Bracket Removal
 * Why this pattern: Nested brackets with sign propagation are naturally tracked using a stack that records the current sign context as brackets open and close.
 *
 * Interview Scenario:
 * "A twist on LeetCode 224 (Basic Calculator) style problems, asked at Amazon/Adobe to test stack usage for nested expression simplification."
 *
 * Example:
 *   Input:  expr = "a-(b+c-(d+e))"
 *   Output: "a-b-c+d+e"
 */
