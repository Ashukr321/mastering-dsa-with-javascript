// 12. Find The Length Of The Longest Consecutive Sequence In An Unsorted Array

/**
 * Pattern Used: Hashing / Set-based Sequence Detection
 * Why this pattern: Putting every number in a hash set lets you check in
 * O(1) whether a number is the start of a sequence (its predecessor isn't in
 * the set), then walk forward counting consecutive members, giving an
 * overall O(n) solution without sorting.
 *
 * Interview Scenario:
 * "Given an unsorted list of user activity timestamps (as day numbers), find
 * the longest streak of consecutive active days, without sorting the
 * timestamps first."
 *
 * Example:
 *   Input:  nums = [100, 4, 200, 1, 3, 2]
 *   Output: 4 (the sequence 1, 2, 3, 4)
 */
