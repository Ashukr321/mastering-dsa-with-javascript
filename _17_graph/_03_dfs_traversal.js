// 3. Traverse A Graph By Exploring As Deep As Possible Using Depth-First Search

/**
 * Pattern Used: DFS on Graph
 * Why this pattern: Recursively (or with an explicit stack) dives as deep as
 * possible along each branch before backtracking, which is the foundation for
 * cycle detection, topological sort, and connected component discovery.
 *
 * Interview Scenario:
 * "Given an adjacency list and a starting node, print all nodes in the order
 * they are visited by depth-first search, using a visited set to avoid
 * revisiting nodes in a cyclic graph."
 *
 * Example:
 *   Input:  graph = { 0: [1,2], 1: [0,3], 2: [0,3], 3: [1,2] }, start = 0
 *   Output: [0, 1, 3, 2]
 */
