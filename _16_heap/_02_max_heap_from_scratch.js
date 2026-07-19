// 2. Implement a Max-Heap from scratch (array-based)
// LeetCode: https://www.geeksforgeeks.org/problems/implement-a-maxheapmin-heap-using-arrays/1

/**
 * Pattern Used: Max-Heap / Priority Queue
 * Why this pattern: Mirrors the min-heap but flips the comparison so the
 * largest element always stays at the root, letting insert/extract-max run
 * in O(log n) using the same array-indexed parent/child layout.
 *
 * Interview Scenario:
 * "Follow-up to the min-heap question: implement a max-heap from scratch
 * backed by a plain array, supporting insert, peek, and extractMax, and
 * explain how flipping a single comparison operator changes a min-heap into
 * a max-heap."
 *
 * Example:
 *   Input:  insert(5), insert(3), insert(8), insert(1), then extractMax()
 *   Output: extractMax() returns 8, heap now maintains 5 at the root
 */
