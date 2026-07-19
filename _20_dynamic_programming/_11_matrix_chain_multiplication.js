// 11. Matrix Chain Multiplication (Minimum Scalar Multiplications)

/**
 * Pattern Used: Matrix Chain Multiplication Pattern (Interval DP)
 * Why this pattern: The optimal way to parenthesize a chain of matrices
 * depends on trying every possible split point between two sub-chains and
 * combining their already-optimal costs, which is the hallmark of interval
 * (range) DP over increasing chain lengths.
 *
 * Interview Scenario:
 * "Classic computer-algebra-systems style interview question: given the
 * dimensions of a chain of matrices to multiply, find the order of
 * multiplication (parenthesization) that minimizes the total number of
 * scalar multiplications, without actually multiplying the matrices."
 *
 * Example:
 *   Input:  dims = [10, 30, 5, 60]
 *   Output: 4500 (multiply as ((A1 x A2) x A3))
 */
