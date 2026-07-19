// 3. Count Frequency Of Elements In An Array

/**
 * Pattern Used: Hashing / Frequency Map
 * Why this pattern: A hash map keyed by element value lets you tally how many
 * times each value occurs in a single linear scan, which is the foundation
 * for many downstream problems like mode-finding and anagram checks.
 *
 * Interview Scenario:
 * "Given a stream of product IDs sold today, produce a count of how many
 * units of each product were sold, without sorting the data first."
 *
 * Example:
 *   Input:  arr = [4, 5, 4, 6, 5, 4]
 *   Output: { '4': 3, '5': 2, '6': 1 }
 */
