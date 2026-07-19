// 1. Rotate a square matrix by 90 degrees clockwise, in-place

/**
 * Pattern Used: In-place Rotation (Transpose + Reverse Rows)
 * Why this pattern: Rotating a matrix 90 degrees clockwise is equivalent to
 * first transposing it and then reversing each row, which achieves the
 * rotation without allocating a second matrix.
 *
 * Interview Scenario:
 * "Asked at Amazon/Microsoft: 'You're given an image represented as an NxN
 * matrix; rotate it 90 degrees clockwise without allocating a new matrix,
 * since the image buffer cannot be resized or duplicated.'"
 *
 * Example:
 *   Input:  [[1,2,3],[4,5,6],[7,8,9]]
 *   Output: [[7,4,1],[8,5,2],[9,6,3]]
 */
