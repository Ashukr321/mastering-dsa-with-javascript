// 4. Detect Whether An Undirected Graph Contains A Cycle

/**
 * Pattern Used: DFS on Graph (Parent Tracking) / Union-Find
 * Why this pattern: A cycle exists in an undirected graph if a DFS reaches an
 * already-visited vertex that is not the immediate parent of the current
 * vertex, since that extra edge closes a loop back to an earlier node.
 *
 * Interview Scenario:
 * "Given an undirected graph as an adjacency list, determine if it contains a
 * cycle - this comes up when validating whether a set of connections forms a
 * simple tree (no redundant edges) versus a graph with a loop."
 *
 * Example:
 *   Input:  graph = { 0: [1,2], 1: [0,2], 2: [0,1] }
 *   Output: true (0-1-2-0 forms a cycle)
 */
