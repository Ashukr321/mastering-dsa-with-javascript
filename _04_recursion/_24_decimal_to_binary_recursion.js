// 24. Decimal to binary conversion using recursion
/**
 * Pattern Used: Divide and Conquer (Base Conversion Recursion)
 * Why this pattern: Repeatedly recursing on n/2 and appending n%2 on the way back builds the binary representation digit by digit, the same divide-by-base technique generalizes to any base conversion.
 *
 * Interview Scenario:
 * "Asked at hardware/embedded and general SDE interviews to test number-system understanding: 'Convert a decimal number to its binary string representation without using built-in toString(2).'"
 *
 * Example:
 *   Input:  n = 22
 *   Output: "10110"
 */
