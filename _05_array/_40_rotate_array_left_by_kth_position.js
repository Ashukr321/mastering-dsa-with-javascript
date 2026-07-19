// 40. Rotate array left by kth position using stl vector
// LeetCode: https://leetcode.com/problems/rotate-array/ (related)
/**
 * Pattern Used: Reversal Algorithm / Cyclic Rotation
 * Why this pattern: Rotating by k positions generalizes the single-rotation case; using the reverse-thrice trick (reverse first k, reverse remaining n-k, reverse whole array) achieves it in O(n) time and O(1) space.
 *
 * Interview Scenario:
 * "A natural follow-up at Amazon/Microsoft after solving rotate-by-1: 'Now generalize your rotation to work for any k, including k larger than the array length.' Tests generalization and modulo handling for k > n."
 *
 * Example:
 *   Input:  nums = [1,2,3,4,5,6,7], k = 2
 *   Output: [3,4,5,6,7,1,2]
 */
