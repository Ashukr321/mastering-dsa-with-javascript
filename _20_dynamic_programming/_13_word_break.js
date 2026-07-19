// 13. Word Break Problem
// LeetCode: https://leetcode.com/problems/word-break/

/**
 * Pattern Used: 1D Dynamic Programming (Memoization/Tabulation)
 * Why this pattern: A string's prefix of length i can be segmented into
 * dictionary words only if some earlier prefix was segmentable and the
 * remaining substring is itself a dictionary word, so the answer builds
 * incrementally over string positions.
 *
 * Interview Scenario:
 * "Common string-DP interview question for text processing/autocomplete
 * systems: given a string and a dictionary of words, determine whether the
 * string can be segmented into a space-separated sequence of one or more
 * dictionary words."
 *
 * Example:
 *   Input:  s = "leetcode", wordDict = ["leet", "code"]
 *   Output: true ("leet" + "code")
 */
