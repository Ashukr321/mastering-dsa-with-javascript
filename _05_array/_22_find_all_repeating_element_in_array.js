// 22. Find all repeating element in array
// LeetCode: https://leetcode.com/problems/find-all-duplicates-in-an-array/
/**
 * Pattern Used: Index Marking / In-place Hashing (Cyclic Sort variant)
 * Why this pattern: Because values lie within the array's own index range, each value can be used to mark its corresponding index (e.g., by negation) so that revisiting a negative-marked index reveals a duplicate, all in O(1) extra space.
 *
 * Interview Scenario:
 * "Asked at Amazon/Google: 'Given an array of employee badge scans where values range from 1 to n, find all badge numbers that scanned in more than once.' Tests the in-place marking trick over a plain hash-set solution."
 *
 * Example:
 *   Input:  [4,3,2,7,8,2,3,1]
 *   Output: [2, 3]
 */
