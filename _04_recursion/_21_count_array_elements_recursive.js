// 21. Recursive count the number of array element
/**
 * Pattern Used: Linear Recursion over Array (Shrink Input by One Element per Call)
 * Why this pattern: The array is processed by recursing on the sub-array minus the first (or last) element and adding 1 for the current element, reimplementing Array.length recursively to build intuition for recursive array traversal.
 *
 * Interview Scenario:
 * "A basic building-block question used to check if a candidate can traverse an array recursively (via index or slice) before moving on to harder array recursion problems like max/min/sum."
 *
 * Example:
 *   Input:  arr = [4, 8, 15, 16, 23]
 *   Output: 5
 */
