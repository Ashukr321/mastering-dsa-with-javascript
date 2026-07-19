// 31. Find the factorial of large number
/**
 * Pattern Used: Array-based Big Number Arithmetic
 * Why this pattern: Since large factorials overflow standard number types, the result is stored digit-by-digit in an array and multiplied manually with carry propagation, similar to how big integers are handled without BigInt.
 *
 * Interview Scenario:
 * "Asked at Amazon/Adobe for candidates who dismiss overflow: 'Compute 100! exactly, knowing it far exceeds the range of a 64-bit integer.' Tests understanding of manual big-number multiplication using arrays."
 *
 * Example:
 *   Input:  n = 5
 *   Output: 120
 */
