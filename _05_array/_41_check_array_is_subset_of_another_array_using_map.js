// 41. Check array is subset of another array using unOrder_map use frequency
/**
 * Pattern Used: Hashing / Frequency Map
 * Why this pattern: Using a map (unordered_map-style) to store frequencies of the larger array lets each element of the smaller array be checked and decremented in O(1) average time, confirming subset validity including duplicate counts.
 *
 * Interview Scenario:
 * "Asked at Paytm/Amazon as a variation of the earlier subset question: 'Verify using a frequency map whether one array of purchased items is fully contained within a warehouse stock array.' Tests explicit map-based frequency tracking."
 *
 * Example:
 *   Input:  arr1 = [11,1,13,21,3,7], arr2 = [11,3,7,1]
 *   Output: true
 */
