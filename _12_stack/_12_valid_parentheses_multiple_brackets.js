// 12. Check If A String With Multiple Bracket Types Is Valid

/**
 * Pattern Used: Stack - Matching Pairs Simulation With Type Checking
 * Why this pattern: With three independent bracket types '()', '{}', '[]',
 * every closing bracket must match the type of the most recently opened,
 * still-unmatched bracket - the exact LIFO guarantee a stack provides, so
 * pushing opens and validating/popping on each close catches both wrong
 * type and wrong order in one linear pass.
 *
 * Interview Scenario:
 * "Extremely common interview screener (asked at nearly every big tech
 * company): given a string containing '()', '{}' and '[]' characters,
 * determine if it is valid - every open has a matching close of the same
 * type in the correct order, and nothing is left unmatched."
 *
 * Example:
 *   Input:  s = "{[()]}"
 *   Output: true
 *
 *   Input:  s = "{[(])}"
 *   Output: false (brackets are mismatched/interleaved)
 */
