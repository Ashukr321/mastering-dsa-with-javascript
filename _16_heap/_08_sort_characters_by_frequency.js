// 8. Sort characters in a string by frequency using a heap
// LeetCode: https://leetcode.com/problems/sort-characters-by-frequency/

/**
 * Pattern Used: Top-K Elements via Heap
 * Why this pattern: Counting each character's frequency with a hash map and
 * then draining a max-heap ordered by frequency produces characters from most
 * to least frequent, letting the output string be rebuilt in
 * O(n + k log k) where k is the number of distinct characters.
 *
 * Interview Scenario:
 * "String-processing question that reuses the top-k heap idea: given a
 * string, rearrange its characters so they appear in decreasing order of
 * frequency, and be ready to discuss the tie-breaking behavior when
 * frequencies are equal."
 *
 * Example:
 *   Input:  s = "tree"
 *   Output: "eert" (or "eetr" - both e's must be adjacent-first since frequency 2 > 1)
 */
