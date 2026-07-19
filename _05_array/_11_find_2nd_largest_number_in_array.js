// 11. Find 2nd largest number in array
/**
 * Pattern Used: Linear Scan / Two Variable Tracking
 * Why this pattern: The second largest value can be found in a single pass by maintaining two variables (largest and second largest) that update together as the array is scanned.
 *
 * Interview Scenario:
 * "Asked at Flipkart/Paytm phone screens: 'Find the runner-up score in a game leaderboard array without sorting.' Tests whether candidates avoid the O(n log n) sort-and-pick shortcut."
 *
 * Example:
 *   Input:  [12, 35, 1, 10, 34, 1]
 *   Output: 34
 */
