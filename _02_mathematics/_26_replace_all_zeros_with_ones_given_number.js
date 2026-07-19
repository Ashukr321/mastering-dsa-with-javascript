// 26. Replace all 0's with 1's in a given number
/**
 * Pattern Used: Digit Extraction and Reconstruction via Modulo/Division
 * Why this pattern: The number is decomposed digit by digit with `% 10`/`/ 10`; every digit equal to 0 is
 * substituted with 1, and the digits are reassembled in original order to rebuild the transformed number.
 *
 * Interview Scenario:
 * "Tests digit-level transformation skills without resorting to string conversion: rebuild a number after
 * replacing every occurrence of a specific digit, useful groundwork for masking/formatting-style problems."
 *
 * Example:
 *   Input:  1023
 *   Output: 1123
 */
