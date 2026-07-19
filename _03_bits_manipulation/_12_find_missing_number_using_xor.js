// 12. Find the Missing Number in an Array Containing n Distinct Numbers from 0 to n

/**
 * Pattern Used: XOR Trick (Missing Element via Cancellation)
 * Why this pattern: XOR-ing every index/value from 0 to n together with every element in the array cancels out
 * all numbers that are present, leaving only the one number in the 0..n range that never appeared.
 *
 * Interview Scenario:
 * "A common alternative to the sum-formula approach (LeetCode 268): given an array containing n distinct
 * numbers taken from the range [0, n], find the one number missing from the array without extra space."
 *
 * Example:
 *   Input:  nums = [3, 0, 1]
 *   Output: 2
 */
