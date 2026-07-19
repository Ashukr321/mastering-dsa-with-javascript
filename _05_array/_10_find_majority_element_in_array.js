// 10. Find majority element in array
// LeetCode: https://leetcode.com/problems/majority-element/
/**
 * Pattern Used: Boyer-Moore Voting Algorithm
 * Why this pattern: Finding the element that appears more than n/2 times can be solved in O(n) time and O(1) space by maintaining a candidate and a vote counter that cancels out non-matching elements.
 *
 * Interview Scenario:
 * "Asked at Amazon/Uber onsite rounds: 'Given election ballots as an array of candidate IDs, determine which candidate has a strict majority.' Tests knowledge of the voting algorithm over hashing-based O(n) space solutions."
 *
 * Example:
 *   Input:  [2, 2, 1, 1, 1, 2, 2]
 *   Output: 2
 */
