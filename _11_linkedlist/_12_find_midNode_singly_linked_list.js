// 12. Find the midNode of the singly linked list
// LeetCode: https://leetcode.com/problems/middle-of-the-linked-list/
/**
 * Pattern Used: Fast & Slow Pointers (Floyd's Tortoise and Hare)
 * Why this pattern: Moving a fast pointer two steps for every one step of the slow pointer means that when fast reaches the end, slow lands exactly on the middle — found in a single pass instead of counting the length first.
 *
 * Interview Scenario:
 * "A very common interview question at Google/Amazon: 'find the middle of a linked list without knowing its length in advance and in a single traversal.'"
 *
 * Example:
 *   Input:  list: 1 -> 2 -> 3 -> 4 -> 5 -> null
 *   Output: Node(3)
 */
