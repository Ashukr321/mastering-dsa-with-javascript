// 23. Check array is subset of another array or not
/**
 * Pattern Used: Hashing / Frequency Map
 * Why this pattern: Building a frequency map of the larger array allows O(1) average lookups to verify that every element (and its required count) of the smaller array is present.
 *
 * Interview Scenario:
 * "Asked at Amazon/Paytm: 'Given a required ingredients list and a pantry inventory array, check if the pantry can fulfill the recipe.' Tests frequency-aware subset checking instead of naive nested loops."
 *
 * Example:
 *   Input:  arr1 = [1,2,3,4,5], arr2 = [2,4]
 *   Output: true
 */
