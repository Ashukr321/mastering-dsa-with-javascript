// 22. LCM of two numbers
/**
 * Pattern Used: Euclidean Algorithm (via GCD Relationship)
 * Why this pattern: The LCM is derived from the identity `lcm(a, b) = (a * b) / gcd(a, b)`, reusing the
 * efficient Euclidean GCD computation instead of iterating through multiples until a common one is found.
 *
 * Interview Scenario:
 * "Tests whether a candidate knows the mathematical relationship between GCD and LCM rather than brute-forcing
 * by checking successive multiples of the larger number, which is far slower for large inputs."
 *
 * Example:
 *   Input:  a = 4, b = 6
 *   Output: 12
 */
