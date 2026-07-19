// 4. Find the longest word that can be built one character at a time by other words in the list
// LeetCode: https://leetcode.com/problems/longest-word-in-dictionary/

/**
 * Pattern Used: Trie + DFS (Valid-Prefix-Chain Traversal)
 * Why this pattern: Inserting every word into a trie and marking end-of-word nodes lets a DFS descend only into children whose node is itself a complete word, efficiently finding the longest buildable chain instead of checking every prefix of every word against the set.
 *
 * Interview Scenario:
 * "Asked to see if a candidate can extend a basic trie beyond insert/search: given a list of words, find the longest word such that every prefix of it (built one letter at a time) is also present, breaking ties by lexicographic order."
 *
 * Example:
 *   Input:  words = ["w","wo","wor","worl","world"]
 *   Output: "world"
 */
