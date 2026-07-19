// 5. Interpolation Search

/**
 * Pattern Used: Interpolation Search (Position Estimation via Value Proportion)
 * Why this pattern: Instead of always probing the middle like binary search, it
 * estimates the likely position of the target using linear interpolation based
 * on the target's value relative to the range, giving average O(log log n) on
 * uniformly distributed sorted data (degrades to O(n) worst case otherwise).
 *
 * Interview Scenario:
 * "Comes up when discussing search over uniformly distributed numeric data,
 * e.g. searching a sorted array of phone numbers or timestamps, where you can
 * estimate where the value 'should' be instead of blindly halving."
 *
 * Example:
 *   Input:  arr = [10, 20, 30, 40, 50], target = 40
 *   Output: 3 (index of 40, found in a single probe via interpolation formula)
 */
