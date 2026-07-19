// 5. Find The First Non-Repeating Element In An Array

/**
 * Pattern Used: Hashing / Frequency Map With Order Tracking
 * Why this pattern: A single pass builds a frequency map of every element,
 * then a second pass over the original order finds the first element whose
 * count is 1, giving O(n) time instead of the O(n^2) cost of checking each
 * element against every other.
 *
 * Interview Scenario:
 * "Given a stream of log event codes, find the first event code that
 * occurred exactly once, useful for spotting the first 'unique' anomaly in
 * the stream."
 *
 * Example:
 *   Input:  arr = [9, 4, 9, 6, 7, 4]
 *   Output: 6 (first element with frequency 1)
 */
