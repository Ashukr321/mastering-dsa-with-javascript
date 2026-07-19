// 19. Print all prime factors of the given number
/**
 * Pattern Used: Trial Division Prime Factorization
 * Why this pattern: The number is repeatedly divided by the smallest possible factor (starting at 2) until it
 * no longer divides evenly, then the divisor is incremented -- peeling off prime factors one at a time in O(sqrt(n)).
 *
 * Interview Scenario:
 * "A classic number-theory question: decompose a number into its prime factors, e.g. for cryptography or
 * fraction-simplification contexts, testing whether a candidate loops efficiently instead of re-checking primality."
 *
 * Example:
 *   Input:  60
 *   Output: [2, 2, 3, 5]
 */
