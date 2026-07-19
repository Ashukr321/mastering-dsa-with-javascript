// 8. Check if the number is positive or not
/**
 * Pattern Used: Sign Comparison
 * Why this pattern: A single comparison against zero (`n > 0`, `n < 0`, `n === 0`) classifies the sign of the
 * number without any looping or arithmetic beyond the comparison itself.
 *
 * Interview Scenario:
 * "Used as a trivial edge-case gate before a bigger problem (e.g. 'assume input can be negative -- how do you
 * validate it first?') to confirm a candidate handles zero and negative boundaries explicitly."
 *
 * Example:
 *   Input:  -5
 *   Output: "Negative"
 */
