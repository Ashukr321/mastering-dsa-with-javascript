// 13. Create A Deep Copy Of A Connected Undirected Graph

/**
 * Pattern Used: DFS on Graph (with a Visited Hash Map)
 * Why this pattern: A hash map from original node to its clone lets DFS (or
 * BFS) traverse the graph once while both creating new node copies and
 * correctly wiring up neighbor references, even across cycles.
 *
 * Interview Scenario:
 * "Given a reference to a node in a connected undirected graph, return a deep
 * copy (clone) of the entire graph - tests whether you can traverse and
 * rebuild a graph structure without infinite looping on cycles."
 *
 * Example:
 *   Input:  graph = { 1: [2,4], 2: [1,3], 3: [2,4], 4: [1,3] }, start = 1
 *   Output: a fully cloned graph with the same structure but new node objects
 */
