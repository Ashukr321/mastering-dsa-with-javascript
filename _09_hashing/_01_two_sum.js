// 1. Two Sum

/**
 * Pattern Used: Hashing / Complement Lookup
 * Why this pattern: Storing each visited value with its index in a hash map
 * lets you check whether the complement (target - current) has already been
 * seen in O(1), turning an O(n^2) brute-force pair search into one O(n) pass.
 *
 * Interview Scenario:
 * "The classic warm-up question: given an array of prices and a target
 * budget, find the indices of the two items that add up exactly to the
 * target, and explain why a hash map beats the nested-loop approach."
 *
 * Example:
 *   Input:  nums = [2, 7, 11, 15], target = 9
 *   Output: [0, 1] (nums[0] + nums[1] = 9)
 */
