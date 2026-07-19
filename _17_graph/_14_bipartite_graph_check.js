// 14. Determine If A Graph's Vertices Can Be Split Into Two Independent Sets

/**
 * Pattern Used: BFS on Graph / DFS on Graph (2-Coloring)
 * Why this pattern: Attempts to color every vertex with one of two colors
 * such that no edge connects two same-colored vertices; if traversal ever
 * forces a neighbor to share its own color, the graph is not bipartite.
 *
 * Interview Scenario:
 * "Given an undirected graph, determine if its vertices can be divided into
 * two disjoint groups so that every edge connects a vertex from one group to
 * the other - a common framing for matching problems or detecting odd-length
 * cycles."
 *
 * Example:
 *   Input:  graph = { 0: [1,3], 1: [0,2], 2: [1,3], 3: [0,2] }
 *   Output: true (bipartite: {0,2} and {1,3})
 */
