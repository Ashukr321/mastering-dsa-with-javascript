// 21. What is the trie and its applications
// LeetCode: https://leetcode.com/problems/implement-trie-prefix-tree/

/**
 * Pattern Used: Trie (Prefix Tree) Traversal
 * Why this pattern: Stores strings character-by-character along root-to-node paths so that shared prefixes are shared paths, allowing insert/search/startsWith in O(word length) instead of scanning every stored string.
 *
 * Interview Scenario:
 * "LeetCode 208-style question used heavily in autocomplete/search-suggestion interview scenarios to test whether candidates model a 26-ary (or map-based) branching structure correctly."
 *
 * Example:
 *   Input:  insert('cat'), insert('car'); startsWith('ca')
 *   Output: true - 'c'->'a' path is shared, then branches to 't' and 'r'
 */
