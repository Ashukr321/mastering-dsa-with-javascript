// 3. Find the Single Number in an Array Where Every Other Element Appears Twice

/**
 * Pattern Used: XOR Trick (Cancellation of Duplicate Pairs)
 * Why this pattern: XOR-ing a number with itself yields 0 and XOR is commutative/associative, so XOR-ing every
 * element together cancels out all duplicate pairs and leaves only the element that appears once.
 *
 * Interview Scenario:
 * "A staple XOR question (LeetCode 136): given a non-empty array where every element appears exactly twice
 * except for one, find that single element in O(n) time and O(1) extra space."
 *
 * Example:
 *   Input:  nums = [4, 1, 2, 1, 2]
 *   Output: 4
 */
