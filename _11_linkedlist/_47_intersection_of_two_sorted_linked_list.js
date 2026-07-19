// 47. Intersection of two sorted linked list
// LeetCode: https://leetcode.com/problems/intersection-of-two-linked-lists/ (related)
/**
 * Pattern Used: Two Pointer Traversal (Merge-style Comparison)
 * Why this pattern: Two pointers walk both sorted lists simultaneously; whichever pointer references the smaller value advances, and matching values are collected into the result — the same comparison strategy used to merge two sorted lists, adapted to only keep common elements.
 *
 * Interview Scenario:
 * "A follow-up to the merge-two-sorted-lists question, often asked to test whether candidates can adapt the merge pattern for intersection/union style problems instead of writing a nested O(n*m) loop."
 *
 * Example:
 *   Input:  list1: 1 -> 2 -> 3 -> 4 -> null, list2: 2 -> 4 -> 6 -> null
 *   Output: 2 -> 4 -> null
 */
