// 44. Check linked list is palindrome or not
// LeetCode: https://leetcode.com/problems/palindrome-linked-list/
/**
 * Pattern Used: Two Pointer Traversal + In-place Reversal
 * Why this pattern: Fast & Slow pointers find the middle in one pass, the second half is reversed in place (Recursion/Iteration on Linked Structures), and then two pointers walk from both ends comparing values — achieving O(1) extra space instead of copying the list into an array or stack.
 *
 * Interview Scenario:
 * "A frequently asked interview question (LeetCode 234, Palindrome Linked List) specifically used to test whether a candidate can avoid the O(n) space solution and instead reverse half the list in place."
 *
 * Example:
 *   Input:  list: 1 -> 2 -> 3 -> 2 -> 1 -> null
 *   Output: true (palindrome)
 */
