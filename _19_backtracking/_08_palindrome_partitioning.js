// 8. Partition A String Into All Possible Groups Of Substrings Where Every Substring Is A Palindrome

/**
 * Pattern Used: Backtracking - Choose/Explore/Unchoose With Substring Cuts
 * Why this pattern: Tries every possible prefix cut of the remaining string,
 * only recurses into a cut whose prefix is a palindrome, and backtracks by
 * removing the last chosen substring before trying the next cut length.
 *
 * Interview Scenario:
 * "Asked to test combining string validation with backtracking: given a
 * string, partition it such that every substring in the partition is a
 * palindrome, and return all possible partitions."
 *
 * Example:
 *   Input:  s = "aab"
 *   Output: [["a","a","b"], ["aa","b"]]
 */
