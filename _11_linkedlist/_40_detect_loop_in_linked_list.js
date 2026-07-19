// 40. Detect the loop in the linked list
// LeetCode: https://leetcode.com/problems/linked-list-cycle/
/**
 * Pattern Used: Fast & Slow Pointers (Floyd's Cycle Detection)
 * Why this pattern: Advancing a slow pointer by one and a fast pointer by two guarantees that if a cycle exists, the fast pointer eventually laps the slow pointer and they meet; if the list is acyclic, fast simply reaches null.
 *
 * Interview Scenario:
 * "A staple linked list question at nearly every FAANG interview: 'determine if a linked list has a cycle using O(1) extra space' (LeetCode 141, Linked List Cycle)."
 *
 * Example:
 *   Input:  list: 1 -> 2 -> 3 -> 4 -> (4 points back to 2, forming a cycle)
 *   Output: true (loop detected)
 */
