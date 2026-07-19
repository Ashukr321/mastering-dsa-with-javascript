// 5. Find All Unique Combinations Of Candidate Numbers That Sum Up To A Given Target (Numbers Can Be Reused)

/**
 * Pattern Used: Backtracking - Choose/Explore/Unchoose With Reuse
 * Why this pattern: Explores candidates in order, allowing the same index to
 * be reused in the next recursive call to permit repeated numbers, while
 * backtracking whenever the running sum meets or exceeds the target.
 *
 * Interview Scenario:
 * "Common variant of subset-sum asked in interviews to test pruning with
 * reusable elements: given an array of candidate numbers and a target, return
 * all unique combinations where the chosen numbers sum to the target."
 *
 * Example:
 *   Input:  candidates = [2, 3, 6, 7], target = 7
 *   Output: [[2,2,3], [7]]
 */
