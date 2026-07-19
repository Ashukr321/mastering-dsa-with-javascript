// 44. Make a pair of the array element whose sum is equal to target element
// LeetCode: https://leetcode.com/problems/two-sum/
/**
 * Pattern Used: Hashing (Complement Lookup) - Two Sum Pattern
 * Why this pattern: For each element, checking whether its complement (target - element) has already been seen via a hash map finds the matching pair in a single O(n) pass instead of the O(n^2) brute-force nested loop.
 *
 * Interview Scenario:
 * "The most famous interview question of all, asked everywhere from Amazon to Google phone screens: 'Given an array of prices and a budget, find two items whose prices sum exactly to the budget.' Tests the fundamental complement-lookup hashing pattern."
 *
 * Example:
 *   Input:  nums = [2, 7, 11, 15], target = 9
 *   Output: [0, 1] (indices of 2 and 7)
 */
