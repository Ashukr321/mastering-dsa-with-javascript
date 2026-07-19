// 9. Generate All Subsets (Power Set) of a Set Using Bitmasking

/**
 * Pattern Used: Bit Masking (Power Set Enumeration)
 * Why this pattern: Each of the 2^n integers from 0 to 2^n - 1 represents a unique combination of include/exclude
 * decisions for the n elements, so reading the set bits of each integer as a mask reconstructs every possible subset.
 *
 * Interview Scenario:
 * "A recursion alternative interviewers like to see (LeetCode 78): given a set of distinct integers, return all
 * possible subsets, and show how iterating bitmasks avoids explicit recursion or backtracking."
 *
 * Example:
 *   Input:  nums = [1, 2, 3]
 *   Output: [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]
 */
