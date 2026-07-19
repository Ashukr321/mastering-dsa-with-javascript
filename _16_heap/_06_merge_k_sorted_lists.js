// 6. Merge k sorted lists using a heap
// LeetCode: https://leetcode.com/problems/merge-k-sorted-lists/

/**
 * Pattern Used: K-way Merge using Heap
 * Why this pattern: Pushing the head node of each of the k lists into a
 * min-heap lets you repeatedly pop the overall smallest node, append it to
 * the result, and push its successor, merging all lists in O(N log k) where
 * N is the total number of nodes.
 *
 * Interview Scenario:
 * "Hard-tier linked-list question asked at almost every big tech company:
 * given k sorted linked lists, merge them into one sorted linked list, and
 * explain why a heap-based k-way merge beats merging the lists two at a
 * time."
 *
 * Example:
 *   Input:  lists = [[1,4,5],[1,3,4],[2,6]]
 *   Output: [1,1,2,3,4,4,5,6]
 */
