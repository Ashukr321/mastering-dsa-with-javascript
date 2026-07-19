// 1. Implement a Trie (insert, search, startsWith) from scratch
// LeetCode: https://leetcode.com/problems/implement-trie-prefix-tree/

/**
 * Pattern Used: Trie / Prefix Tree
 * Why this pattern: A trie stores strings character by character along root-to-node paths so words sharing a prefix share the same nodes, giving O(word length) insert, search, and prefix-lookup instead of scanning every stored word.
 *
 * Interview Scenario:
 * "Classic data-structure-design round asked at almost every big tech company: build a Trie class from scratch supporting insert(word), search(word), and startsWith(prefix), then be ready to discuss a 26-array vs. a Map at each node."
 *
 * Example:
 *   Input:  insert("apple"); search("apple"); search("app"); startsWith("app")
 *   Output: true, false, true
 */
