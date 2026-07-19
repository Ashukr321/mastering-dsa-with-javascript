// 13. Find intersection of two array
// LeetCode: https://leetcode.com/problems/intersection-of-two-arrays/
/**
 * Pattern Used: Hashing / Set Intersection
 * Why this pattern: Storing one array's elements in a hash set allows O(1) average lookups while scanning the second array, yielding the common unique elements efficiently.
 *
 * Interview Scenario:
 * "Asked at Google/Adobe: 'Given two arrays of user IDs from two different marketing campaigns, find users who appear in both.' Tests set-based thinking over brute-force O(n*m) comparison."
 *
 * Example:
 *   Input:  nums1 = [1,2,2,1], nums2 = [2,2]
 *   Output: [2]
 */
