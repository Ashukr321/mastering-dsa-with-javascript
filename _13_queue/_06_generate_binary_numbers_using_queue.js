// 6. Generate Binary Numbers From 1 to N Using a Queue

/**
 * Pattern Used: BFS-Style Level Generation via Queue
 * Why this pattern: Seeding a queue with "1" and repeatedly appending "0" and
 * "1" to the dequeued front builds each next binary number from a shorter
 * valid one, guaranteeing correctness without arithmetic-to-binary conversion.
 *
 * Interview Scenario:
 * "Generate binary representations of the numbers 1 through n, in order,
 * using a queue instead of converting each number with toString(2) - shows
 * you understand queue-driven generation, not just a built-in shortcut."
 *
 * Example:
 *   Input:  n = 5
 *   Output: ["1", "10", "11", "100", "101"]
 */
