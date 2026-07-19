// 18. Factors of a given number
/**
 * Pattern Used: Brute Force Divisor Check
 * Why this pattern: Every integer from 1 to n (or 1 to sqrt(n) with pairing) is tested for exact divisibility
 * (`n % i === 0`), collecting all factors of the number.
 *
 * Interview Scenario:
 * "Often a precursor to prime-factorization or perfect-number problems: list all factors of n, then discuss how
 * to cut the loop from O(n) to O(sqrt(n)) by adding both i and n/i when a divisor is found."
 *
 * Example:
 *   Input:  12
 *   Output: [1, 2, 3, 4, 6, 12]
 */
