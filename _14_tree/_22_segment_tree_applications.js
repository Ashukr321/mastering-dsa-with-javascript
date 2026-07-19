// 22. What are the segment tree and why we use this tree its application

/**
 * Pattern Used: Segment Tree Range Query Structure
 * Why this pattern: Precomputes aggregate values (sum/min/max) over array ranges in a binary-tree layout so both range queries and point updates run in O(log n) instead of O(n) recomputation.
 *
 * Interview Scenario:
 * "Common in 'range sum query - mutable' style interview/competitive-programming problems where a prefix-sum array falls apart because updates would be too slow."
 *
 * Example:
 *   Input:  arr = [1,3,5,7,9,11]; rangeSum(1,3) then update(1,10)
 *   Output: rangeSum(1,3) = 15; after update(1,10), rangeSum(1,3) = 22 - both computed in O(log n)
 */
