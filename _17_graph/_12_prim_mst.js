// 12. Build A Minimum Spanning Tree By Growing One Connected Tree From A Start Node

/**
 * Pattern Used: Prim's Minimum Spanning Tree
 * Why this pattern: Grows a single tree starting from an arbitrary node,
 * repeatedly adding the cheapest edge that connects a new vertex to the
 * already-built tree (via a min-heap), which suits dense graphs represented
 * with an adjacency matrix or list.
 *
 * Interview Scenario:
 * "Given a weighted undirected graph, find the minimum spanning tree cost
 * starting the growth from a single node - often contrasted with Kruskal's to
 * discuss when a tree-growing approach beats a global edge-sorting approach."
 *
 * Example:
 *   Input:  V = 4, edges = [[0,1,10],[0,2,6],[0,3,5],[1,3,15],[2,3,4]]
 *   Output: 19 (minimum spanning tree total weight)
 */
