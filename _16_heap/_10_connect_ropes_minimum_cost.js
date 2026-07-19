// 10. Connect ropes with minimum cost
// LeetCode: https://leetcode.com/problems/minimum-cost-to-connect-sticks/ (Premium)
// GeeksforGeeks: https://www.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/1

/**
 * Pattern Used: Min-Heap / Priority Queue Greedy
 * Why this pattern: Always combining the two currently shortest ropes first
 * (repeatedly popping the two smallest values off a min-heap, summing them,
 * and pushing the sum back) is the greedy choice that minimizes total
 * connection cost, similar in spirit to Huffman coding.
 *
 * Interview Scenario:
 * "Greedy-with-a-heap question: given the lengths of n ropes, connect them
 * all into a single rope where the cost of connecting two ropes equals the
 * sum of their lengths, and find the minimum total cost to connect all of
 * them, explaining why greedily merging the two smallest ropes is optimal."
 *
 * Example:
 *   Input:  ropes = [4, 3, 2, 6]
 *   Output: 29 (2+3=5, 5+4=9, 9+6=15, total cost = 5+9+15 = 29)
 */
