// 2. Check If Duplicate Exists In An Array

/**
 * Pattern Used: Hashing / Set-based Existence Check
 * Why this pattern: Inserting each element into a Set while scanning gives
 * an O(1) "have I seen this before" check, so the whole array can be verified
 * for duplicates in a single O(n) pass instead of comparing every pair.
 *
 * Interview Scenario:
 * "Given a list of scanned ticket IDs at a concert entrance, determine if
 * any ticket was scanned twice, and justify why a hash set is faster than
 * sorting first."
 *
 * Example:
 *   Input:  nums = [1, 2, 3, 1]
 *   Output: true (1 appears twice)
 */
