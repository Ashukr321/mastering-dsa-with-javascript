// 33. Left rotate and array by 1 place
/**
 * Pattern Used: In-place Shift (Rotation by One)
 * Why this pattern: Rotating by exactly one position is done by storing the first element, shifting every other element left by one, and placing the stored element at the end, all in O(n) time and O(1) space.
 *
 * Interview Scenario:
 * "Asked as a simpler lead-in before the general k-rotation problem: 'Shift this circular queue's elements left by one slot.' Confirms the candidate understands rotation mechanics before generalizing to k."
 *
 * Example:
 *   Input:  [1, 2, 3, 4, 5]
 *   Output: [2, 3, 4, 5, 1]
 */
