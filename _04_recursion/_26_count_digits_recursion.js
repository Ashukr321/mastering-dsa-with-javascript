// 26. Count the number of digits of the number
/**
 * Pattern Used: Digit Extraction Recursion (Divide by 10)
 * Why this pattern: Each recursive call strips one digit via integer division by 10 and adds 1 to the count until the number reduces to 0, directly mirroring how many times a number can be divided by its base.
 *
 * Interview Scenario:
 * "A quick warm-up question often paired with 'sum of digits' and 'reverse a number' to see how comfortable a candidate is with digit-manipulation recursion."
 *
 * Example:
 *   Input:  n = 98765
 *   Output: 5
 */
