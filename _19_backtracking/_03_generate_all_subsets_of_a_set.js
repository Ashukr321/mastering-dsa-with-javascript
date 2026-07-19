// 3. Generate All Possible Subsets (The Power Set) Of A Given Set Of Distinct Numbers

/**
 * Pattern Used: Subset/Permutation Generation (Include/Exclude Backtracking)
 * Why this pattern: At each index it branches into two choices - include the
 * current element or skip it - recording the subset at every step and
 * backtracking to explore the other branch after each recursive call returns.
 *
 * Interview Scenario:
 * "Foundational backtracking question used to test whether you can generate
 * 2^n combinations cleanly: given an array of distinct integers, return all
 * possible subsets (the power set), with no duplicate subsets."
 *
 * Example:
 *   Input:  nums = [1, 2, 3]
 *   Output: [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]
 */
