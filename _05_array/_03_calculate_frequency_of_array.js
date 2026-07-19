// 3. Calculate frequency of array
// LeetCode: https://leetcode.com/problems/sort-array-by-increasing-frequency/
/**
 * Pattern Used: Hashing / Frequency Map
 * Why this pattern: Counting occurrences of each element is the canonical use case for a hash map that maps value -> count in a single pass.
 *
 * Interview Scenario:
 * "Frequently asked at Microsoft/Adobe: 'Given a list of user IDs from a log file, find how many times each user appears.' Tests whether the candidate avoids O(n^2) nested loops in favor of O(n) hashing."
 *
 * Example:
 *   Input:  [1, 2, 2, 3, 3, 3]
 *   Output: { 1: 1, 2: 2, 3: 3 }
 */
