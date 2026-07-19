// 3. Ternary Search

/**
 * Pattern Used: Ternary Search (Divide Search Space into Three Parts)
 * Why this pattern: Picks two midpoints that split the range into three parts
 * and compares them to discard one third of the search space each iteration;
 * best suited for locating the extremum of a strictly unimodal function rather
 * than a specific value in a plain sorted array.
 *
 * Interview Scenario:
 * "Asked when the interviewer wants to see if you know binary search has a
 * cousin for optimization problems: given a unimodal (increases then
 * decreases) array or function, find the maximum value efficiently."
 *
 * Example:
 *   Input:  arr = [1, 3, 8, 12, 9, 4] (unimodal)
 *   Output: 12 (peak value, at index 3)
 */
