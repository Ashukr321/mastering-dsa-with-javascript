// 11. Count The Number Of Subarrays That Sum To K

/**
 * Pattern Used: Hashing / Prefix Sum Frequency Map
 * Why this pattern: Tracking how many times each prefix sum has occurred in
 * a hash map lets you detect, at every index, how many earlier prefixes
 * differ from the current prefix by exactly k, counting all matching
 * subarrays in a single O(n) pass.
 *
 * Interview Scenario:
 * "Given a list of daily profit/loss values, count how many contiguous
 * day-ranges sum to exactly a target value k, for a financial reporting
 * tool."
 *
 * Example:
 *   Input:  nums = [1, 1, 1], k = 2
 *   Output: 2 (subarrays [1,1] at indices [0,1] and [1,2])
 */
