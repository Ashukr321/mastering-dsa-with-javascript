// 28. Program to find the roots of a quadratic equation
/**
 * Pattern Used: Quadratic Formula (Discriminant Analysis)
 * Why this pattern: The roots are computed via `x = (-b +/- sqrt(b^2 - 4ac)) / 2a`, branching on the sign of the
 * discriminant to decide between two real roots, one repeated real root, or complex (imaginary) roots.
 *
 * Interview Scenario:
 * "Tests whether a candidate correctly branches on the discriminant's sign -- a frequent trap is forgetting the
 * negative-discriminant (complex roots) case or the zero-discriminant (single repeated root) case."
 *
 * Example:
 *   Input:  a = 1, b = -3, c = 2
 *   Output: [2, 1]
 */
