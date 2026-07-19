// 15. Sum of digits of number
/**
 * Pattern Used: Tail Recursion (single recursive call with accumulator parameter)
 * Why this pattern: By passing a running total as a parameter and returning the recursive call's result directly, this variant is written in tail-recursive form, which some JS engines can optimize.
 *
 * Interview Scenario:
 * "Used to test whether a candidate understands the difference between regular and tail recursion, often followed by 'why doesn't V8 guarantee tail-call optimization even though this is tail-recursive?'."
 *
 * Example:
 *   Input:  n = 987
 *   Output: 24
 */
