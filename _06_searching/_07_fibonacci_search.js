// 7. Fibonacci Search

/**
 * Pattern Used: Fibonacci Search (Divide Search Space Using Fibonacci Numbers)
 * Why this pattern: Uses Fibonacci numbers to split the sorted array into
 * unequal sections instead of an exact half, so it narrows the search using
 * only addition/subtraction (no division), giving O(log n) time - handy on
 * hardware or embedded systems where division is a costly operation.
 *
 * Interview Scenario:
 * "Asked to show awareness of alternatives to binary search: search a sorted
 * array using only addition and subtraction (e.g. on constrained/embedded
 * systems where division is expensive), using Fibonacci numbers to pick split
 * points."
 *
 * Example:
 *   Input:  arr = [10, 22, 35, 40, 45, 50, 80, 82, 85], target = 85
 *   Output: 8 (index of 85, found by narrowing the range with Fibonacci offsets)
 */
