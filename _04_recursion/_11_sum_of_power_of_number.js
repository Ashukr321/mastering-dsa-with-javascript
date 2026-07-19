// 11. Calculate the sum of power of the number
/**
 * Pattern Used: Accumulator Recursion with Nested Computation
 * Why this pattern: Each recursive step computes a power term (e.g. i^k) and adds it to the result of the recursive call on the remaining terms, combining exponentiation with summation recursion.
 *
 * Interview Scenario:
 * "Seen in interviews testing whether a candidate can compose two recursive ideas together (power + sum) rather than only handling isolated textbook problems: 'sum of 1^2 + 2^2 + ... + n^2'."
 *
 * Example:
 *   Input:  n = 4, power = 2
 *   Output: 30  (1+4+9+16)
 */
