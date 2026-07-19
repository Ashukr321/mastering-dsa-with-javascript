// 8. Count the number of distinct substrings of a string using a trie
// LeetCode: https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/

/**
 * Pattern Used: Trie (Suffix Insertion Counting)
 * Why this pattern: Inserting every suffix of the string into a trie one character at a time makes each newly created node correspond to exactly one distinct substring, so counting the total new nodes created gives the distinct-substring count in O(n^2) instead of hashing every substring.
 *
 * Interview Scenario:
 * "String-algorithms interview question testing whether a candidate connects tries to suffix structures: given a string, count how many distinct non-empty substrings it has without generating and hashing all of them separately."
 *
 * Example:
 *   Input:  s = "aabbaba"
 *   Output: 21
 */
