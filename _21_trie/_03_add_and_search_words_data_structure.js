// 3. Design a data structure that supports adding words and searching with '.' wildcards
// LeetCode: https://leetcode.com/problems/design-add-and-search-words-data-structure/

/**
 * Pattern Used: Trie + DFS (Wildcard Backtracking)
 * Why this pattern: Words are stored in a trie so shared prefixes stay compact, and a '.' in the search query is handled by branching the DFS into every child at that level instead of following one deterministic path.
 *
 * Interview Scenario:
 * "Common follow-up to Implement Trie in interviews: design a WordDictionary class with addWord(word) and search(word) where search may contain '.' to match any single letter, testing whether you can combine trie traversal with backtracking."
 *
 * Example:
 *   Input:  addWord("bad"); addWord("dad"); addWord("mad"); search("pad"); search(".ad"); search("b..")
 *   Output: false, true, true
 */
