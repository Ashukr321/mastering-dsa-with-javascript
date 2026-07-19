// 2. Traverse A Graph Level By Level Using Breadth-First Search

/**
 * Pattern Used: BFS on Graph
 * Why this pattern: Explores all neighbors of a node before moving to the next
 * level using a queue, guaranteeing the shortest path in terms of number of
 * edges on an unweighted graph.
 *
 * Interview Scenario:
 * "Given an adjacency list and a starting node, print all nodes in the order
 * they are visited by breadth-first search, and be ready to explain why this
 * order gives the shortest path in an unweighted graph."
 *
 * Example:
 *   Input:  graph = { 0: [1,2], 1: [0,3], 2: [0,3], 3: [1,2] }, start = 0
 *   Output: [0, 1, 2, 3]
 */
