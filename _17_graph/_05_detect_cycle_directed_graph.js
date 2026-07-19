// 5. Detect Whether A Directed Graph Contains A Cycle

/**
 * Pattern Used: DFS on Graph (Recursion Stack / Node Coloring)
 * Why this pattern: In a directed graph a cycle exists only if DFS revisits a
 * node that is still on the current recursion stack (path), so tracking three
 * states per node (unvisited, in-progress, done) correctly distinguishes a
 * true back-edge cycle from a harmless cross-edge.
 *
 * Interview Scenario:
 * "Given a directed graph as an adjacency list, determine if it contains a
 * cycle - the classic setup for deadlock detection in task scheduling or
 * dependency resolution systems."
 *
 * Example:
 *   Input:  graph = { 0: [1], 1: [2], 2: [0] }
 *   Output: true (0 -> 1 -> 2 -> 0 forms a cycle)
 */
