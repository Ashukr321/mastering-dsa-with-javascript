// 4. Swap Two Numbers Without Using a Temporary Variable

/**
 * Pattern Used: XOR Trick (In-Place Value Swap)
 * Why this pattern: XOR-ing a value into itself twice returns the original value, so applying `a ^= b; b ^= a;
 * a ^= b;` in sequence swaps the two variables without needing any extra storage.
 *
 * Interview Scenario:
 * "A trick question interviewers use to probe your bitwise intuition: swap two integer variables in place
 * without a temp variable, and explain why this fails if `a` and `b` reference the same memory location."
 *
 * Example:
 *   Input:  a = 5, b = 9
 *   Output: a = 9, b = 5
 */
