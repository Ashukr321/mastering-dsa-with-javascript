// 4. Prime number in a given range
/**
 * Pattern Used: Brute Force Divisor Check over a Range (Sieve-style Iteration)
 * Why this pattern: Each number in the range is independently tested for primality via trial division up to its
 * square root, and the ones that pass are collected -- the natural extension of a single primality check to a batch.
 *
 * Interview Scenario:
 * "Given a range [start, end], list all primes in it -- a common lead-in to the Sieve of Eratosthenes, testing
 * whether a candidate can spot that repeated trial division is wasteful for large ranges."
 *
 * Example:
 *   Input:  start = 10, end = 20
 *   Output: [11, 13, 17, 19]
 */
