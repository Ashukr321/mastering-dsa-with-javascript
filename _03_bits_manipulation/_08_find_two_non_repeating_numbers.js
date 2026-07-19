// 8. Find the Two Numbers That Appear Only Once in an Array Where All Others Appear Twice

/**
 * Pattern Used: XOR Trick (Bit Partitioning by Rightmost Set Bit)
 * Why this pattern: XOR-ing the whole array cancels duplicate pairs and leaves `x ^ y` for the two unique
 * numbers; picking any bit set in that result splits the array into two groups where x and y fall apart
 * naturally, and XOR-ing each group in isolation recovers both numbers.
 *
 * Interview Scenario:
 * "A harder variant of the single-number problem (LeetCode 260): given an array where every element appears
 * twice except for exactly two elements, find those two elements in O(n) time and O(1) extra space."
 *
 * Example:
 *   Input:  nums = [1, 2, 1, 3, 2, 5]
 *   Output: [3, 5]
 */
