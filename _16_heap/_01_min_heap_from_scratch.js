// 1. Implement a Min-Heap from scratch (array-based)
// LeetCode: https://www.geeksforgeeks.org/problems/implement-a-maxheapmin-heap-using-arrays/1

/**
 * Pattern Used: Min-Heap / Priority Queue
 * Why this pattern: A binary min-heap can be represented compactly as an array
 * where parent/child relationships are derived from index arithmetic, giving
 * O(log n) insert/extract-min while keeping the smallest element always at
 * the root.
 *
 * Interview Scenario:
 * "Before you can use a priority queue you need to prove you understand what's
 * under the hood: implement a min-heap from scratch backed by a plain array,
 * supporting insert, peek, and extractMin, using heapifyUp/heapifyDown to
 * restore the heap property."
 *
 * Example:
 *   Input:  insert(5), insert(3), insert(8), insert(1), then extractMin()
 *   Output: extractMin() returns 1, heap now maintains 3 at the root
 */
