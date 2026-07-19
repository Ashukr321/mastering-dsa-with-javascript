// 2. Word Search II - find all dictionary words that exist in a character grid
// LeetCode: https://leetcode.com/problems/word-search-ii/

/**
 * Pattern Used: Trie + Backtracking (DFS on Grid)
 * Why this pattern: Building a trie from the word list lets a single DFS over the board check many words at once by walking matching trie nodes together, pruning dead branches early instead of re-running a full search per word.
 *
 * Interview Scenario:
 * "Hard-tier Google/Facebook onsite question: given an m x n board of letters and a list of words, return every word that can be formed from adjacent cells (no cell reused twice), expecting the trie + backtracking optimization over brute-force per-word search."
 *
 * Example:
 *   Input:  board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
 *   Output: ["oath","eat"]
 */
