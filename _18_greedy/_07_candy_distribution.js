// 7. Candy Distribution Problem

/**
 * Pattern Used: Greedy - Two-Pass Local Comparison (Left-to-Right, Right-to-Left)
 * Why this pattern: A single greedy pass can't satisfy both neighbor
 * constraints at once, so scanning left-to-right to satisfy the "higher
 * rating than left neighbor" rule and then right-to-left to satisfy the
 * "higher rating than right neighbor" rule (taking the max at each index)
 * greedily minimizes total candies.
 *
 * Interview Scenario:
 * "Each child gets a rating, and children with a higher rating than an
 * adjacent neighbor must receive more candies than that neighbor; every child
 * gets at least one candy. Find the minimum total candies needed."
 *
 * Example:
 *   Input:  ratings = [1, 0, 2]
 *   Output: 5 (distribute candies as [2, 1, 2])
 */
