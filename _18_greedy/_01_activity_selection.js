// 1. Activity Selection Problem

/**
 * Pattern Used: Greedy - Earliest Finish Time First
 * Why this pattern: Sorting activities by finish time and always picking the
 * next activity that starts after the last selected one's finish time
 * guarantees the maximum number of non-overlapping activities.
 *
 * Interview Scenario:
 * "You are given start and end times of n activities that all need the same
 * single resource (e.g. a conference room). Select the maximum number of
 * activities that can be performed without overlapping."
 *
 * Example:
 *   Input:  start = [1, 3, 0, 5, 8, 5], end = [2, 4, 6, 7, 9, 9]
 *   Output: 4 (activities at indices [0, 1, 3, 4] can all be scheduled)
 */
