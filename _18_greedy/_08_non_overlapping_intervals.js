// 8. Non-overlapping Intervals Removal

/**
 * Pattern Used: Greedy - Sort by End Time, Keep Earliest Finishing Interval
 * Why this pattern: Sorting intervals by end time and always keeping the
 * interval that finishes earliest whenever an overlap occurs greedily
 * maximizes the number of intervals kept, which minimizes the number removed.
 *
 * Interview Scenario:
 * "You're given a collection of intervals. Find the minimum number of
 * intervals you must remove so that the rest of the intervals are
 * non-overlapping."
 *
 * Example:
 *   Input:  intervals = [[1, 2], [2, 3], [3, 4], [1, 3]]
 *   Output: 1 (remove [1, 3] to leave the rest non-overlapping)
 */
