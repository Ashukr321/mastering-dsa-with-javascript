// 2. Find all palindrome numbers in a given range
/**
 * Pattern Used: Brute Force Range Iteration + Digit Reversal Check
 * Why this pattern: Every number in [start, end] is scanned and tested with the same digit-reversal palindrome
 * check, collecting the numbers that match -- a straightforward linear scan with an O(digits) check per candidate.
 *
 * Interview Scenario:
 * "Extend the classic palindrome-number check to a range query: given a lower and upper bound, list every
 * palindromic number in between -- useful for testing how candidates generalize a single-value check to a batch."
 *
 * Example:
 *   Input:  start = 10, end = 50
 *   Output: [11, 22, 33, 44]
 */
