// 37. Find the intersection of the array
// LeetCode: https://leetcode.com/problems/intersection-of-two-arrays-ii/
/**
 * Pattern Used: Hashing / Frequency Map (Intersection with Duplicates)
 * Why this pattern: Unlike a simple set intersection, this variant must respect duplicate counts, so a frequency map of one array is decremented as matches are found in the other, in linear time.
 *
 * Interview Scenario:
 * "Asked at Facebook/Amazon: 'Given two arrays of item counts from two warehouses, find the items common to both, preserving how many times each appears.' Tests the distinction between set intersection and multiset (frequency-aware) intersection."
 *
 * Example:
 *   Input:  nums1 = [1,2,2,1], nums2 = [2,2]
 *   Output: [2, 2]
 */
