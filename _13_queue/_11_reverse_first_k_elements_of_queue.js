// 11. Reverse the First K Elements of a Queue

/**
 * Pattern Used: Queue + Auxiliary Stack (Partial Reversal)
 * Why this pattern: Popping the first k elements into a stack reverses their
 * order via LIFO, then re-enqueuing them followed by rotating the remaining
 * n-k elements to the back restores a valid queue with only the front k
 * elements reversed.
 *
 * Interview Scenario:
 * "Given a queue and an integer k, reverse only the first k elements while
 * keeping the rest of the queue in its original relative order - using only
 * standard queue and stack operations."
 *
 * Example:
 *   Input:  queue = [1, 2, 3, 4, 5], k = 3
 *   Output: [3, 2, 1, 4, 5]
 */
