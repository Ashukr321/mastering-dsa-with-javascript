// 12. Remove Duplicate from an array
// LeetCode: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/**
 * Pattern Used: Two Pointers (In-place Deduplication)
 * Why this pattern: For a sorted array, duplicates are adjacent, so a slow pointer marks the last unique position while a fast pointer scans ahead, enabling in-place removal in one pass.
 *
 * Interview Scenario:
 * "A staple LeetCode Easy asked at Amazon/Microsoft: 'Given a sorted array of log timestamps, remove duplicate entries in-place and return the new length.' Tests in-place array mutation without extra memory."
 *
 * Example:
 *   Input:  [1, 1, 2, 2, 3]
 *   Output: [1, 2, 3] (length 3)
 */
