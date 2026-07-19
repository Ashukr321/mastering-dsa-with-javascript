// 4. Find the Kth largest element in an array / a stream
// LeetCode: https://leetcode.com/problems/kth-largest-element-in-an-array/
// LeetCode: https://leetcode.com/problems/kth-largest-element-in-a-stream/

/**
 * Pattern Used: Min-Heap of Size K / Top-K Elements via Heap
 * Why this pattern: Maintaining a min-heap capped at size k keeps the k
 * largest elements seen so far, with the smallest of them at the root, so the
 * kth largest is always a O(1) peek away and each new element only costs
 * O(log k) to process - efficient for both a fixed array and an unbounded
 * stream.
 *
 * Interview Scenario:
 * "Classic top-k warm-up: given an unsorted array, find the kth largest
 * element without fully sorting it. Follow-up: now the numbers arrive one at
 * a time as a stream and you must support add(val) that always returns the
 * current kth largest efficiently."
 *
 * Example:
 *   Input:  nums = [3, 2, 1, 5, 6, 4], k = 2
 *   Output: 5 (the 2nd largest element)
 */
