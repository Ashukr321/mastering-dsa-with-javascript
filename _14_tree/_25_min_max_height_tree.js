// 25. Find the minimum and maximum height of the tree ?
// LeetCode: https://leetcode.com/problems/maximum-depth-of-binary-tree/
// LeetCode: https://leetcode.com/problems/minimum-depth-of-binary-tree/

/**
 * Pattern Used: DFS Recursive Traversal (Height / Depth Computation)
 * Why this pattern: Computes maximum depth as 1 + max(height(left), height(right)) and minimum depth similarly but taking the min along the shortest root-to-leaf path, both post-order style bottom-up recursions.
 *
 * Interview Scenario:
 * "LeetCode 104/111 pairing frequently asked together so interviewers can see if candidates notice minimum depth needs a special case when one child is null (it must not treat that side as depth 0)."
 *
 * Example:
 *   Input:      1
 *              / 
 *             2   
 *            /
 *           3
 *   Output: maxDepth = 3, minDepth = 3 (only path, since node 1 has no right child so minDepth must go through the left side)
 */
