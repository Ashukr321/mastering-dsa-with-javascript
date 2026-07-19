// 4. Generate All Possible Permutations Of A Given Array Of Distinct Numbers

/**
 * Pattern Used: Subset/Permutation Generation (Choose/Explore/Unchoose)
 * Why this pattern: Builds each permutation by picking an unused element,
 * recursing to fill the remaining positions, then marking the element unused
 * again (unchoose) so the next candidate can be tried in that same slot.
 *
 * Interview Scenario:
 * "Frequently asked to test recursive tree traversal with a 'used' tracker:
 * given an array of distinct integers, return all possible orderings
 * (permutations) of its elements."
 *
 * Example:
 *   Input:  nums = [1, 2, 3]
 *   Output: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
 */
