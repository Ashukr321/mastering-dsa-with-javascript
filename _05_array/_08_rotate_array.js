// 8. Rotate array
// LeetCode: https://leetcode.com/problems/rotate-array/
/**
 * Pattern Used: Reversal Algorithm / Cyclic Rotation
 * Why this pattern: Rotating an array by k positions can be done in O(n) time and O(1) space by reversing the whole array and then reversing its two segments.
 *
 * Interview Scenario:
 * "A favorite at Amazon/Microsoft onsite rounds: 'Rotate a circular buffer of scheduled tasks by k positions in-place.' Tests whether candidates know the reversal trick over naive extra-array rotation."
 *
 * Example:
 *   Input:  nums = [1,2,3,4,5,6,7], k = 3
 *   Output: [5,6,7,1,2,3,4]
 */
