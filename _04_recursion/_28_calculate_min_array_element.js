// 28. Calculate the minimum element of the array
/**
 * Pattern Used: Linear Recursion / Reduce Pattern (Compare-and-Recurse)
 * Why this pattern: Mirrors the max-element problem but keeps the smaller of the current element and the recursive minimum of the rest, reinforcing that flipping a single comparison operator repurposes the same recursive skeleton.
 *
 * Interview Scenario:
 * "Typically asked right after the max-element version to check if the candidate generalizes the compare-and-recurse pattern instead of writing new logic from scratch."
 *
 * Example:
 *   Input:  arr = [3, 7, 2, 9, 4]
 *   Output: 2
 */
