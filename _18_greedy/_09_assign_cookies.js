// 9. Assign Cookies Problem

/**
 * Pattern Used: Greedy - Sort Both Arrays, Two Pointer Matching
 * Why this pattern: Sorting children's greed factors and cookie sizes lets
 * you greedily match the smallest cookie that can still satisfy the least
 * greedy remaining child, maximizing the number of content children.
 *
 * Interview Scenario:
 * "Each child has a greed factor and each cookie has a size; a child is
 * content only if given a cookie of size at least equal to their greed
 * factor. Maximize the number of content children given limited cookies."
 *
 * Example:
 *   Input:  greed = [1, 2, 3], cookies = [1, 1]
 *   Output: 1 (only one child can be satisfied with the available cookies)
 */
