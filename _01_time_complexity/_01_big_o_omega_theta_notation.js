// 1. What Is Big-O, Big-Omega, and Big-Theta Notation

/**
 * Pattern Used: Asymptotic Analysis
 * Why this pattern: Describes how an algorithm's running time or space grows
 * relative to input size n, ignoring constants and lower-order terms, so
 * algorithms can be compared independent of hardware or implementation details.
 * Big-O bounds the worst case from above, Big-Omega bounds the best case from
 * below, and Big-Theta gives a tight bound when both coincide.
 *
 * Interview Scenario:
 * "Interviewers frequently ask you to state the time and space complexity of
 * your own solution right after you write it, and to explain the difference
 * between Big-O (upper bound), Big-Omega (lower bound), and Big-Theta (tight
 * bound) when pressed on what 'worst case' really means."
 *
 * Example:
 *   Input:  function that loops once over an array of n elements
 *   Output: O(n) upper bound, Omega(n) lower bound, Theta(n) tight bound
 */
