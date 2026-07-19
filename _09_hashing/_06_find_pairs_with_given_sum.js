// 6. Find All Pairs In An Array With A Given Sum

/**
 * Pattern Used: Hashing / Complement Lookup With Seen Set
 * Why this pattern: Similar to Two Sum but collecting every valid pair, a
 * hash set of previously seen numbers lets you check for a matching
 * complement in O(1) as you scan, avoiding the O(n^2) brute-force pair
 * enumeration.
 *
 * Interview Scenario:
 * "Given a list of transaction amounts, find every pair of transactions that
 * together refund an exact target amount, for a fraud-review tool."
 *
 * Example:
 *   Input:  arr = [1, 5, 7, -1, 5], target = 6
 *   Output: [[1, 5], [7, -1], [1, 5]] (pairs summing to 6)
 */
