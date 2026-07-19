// 6. Find the maximum XOR of two numbers in an array using a binary trie
// LeetCode: https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/

/**
 * Pattern Used: Binary Trie (Bitwise Trie over Bit Representations)
 * Why this pattern: Inserting every number's bits (MSB to LSB) into a binary trie lets you greedily walk toward the opposite bit at every level for a fixed number, maximizing XOR in O(32) per number instead of the O(n^2) brute-force pairwise comparison.
 *
 * Interview Scenario:
 * "Bit-manipulation-meets-trie question favored at Amazon/Bloomberg: given an array of integers, find the maximum XOR of any two elements, expecting the O(n) binary trie approach over the naive O(n^2) pairwise scan."
 *
 * Example:
 *   Input:  nums = [3, 10, 5, 25, 2, 8]
 *   Output: 28 (5 XOR 25 = 28)
 */
