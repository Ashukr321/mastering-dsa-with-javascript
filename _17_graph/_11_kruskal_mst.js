// 11. Build A Minimum Spanning Tree By Adding The Cheapest Edges First

/**
 * Pattern Used: Kruskal's Minimum Spanning Tree (Union-Find)
 * Why this pattern: Sorts all edges by weight and greedily adds each edge to
 * the spanning tree unless it would form a cycle, using Union-Find to check
 * connectivity between the two endpoints in near O(1) time.
 *
 * Interview Scenario:
 * "Given a weighted undirected graph, find the minimum total cost to connect
 * all nodes without any cycles - the classic framing for laying cable or road
 * networks at minimum cost."
 *
 * Example:
 *   Input:  V = 4, edges = [[0,1,10],[0,2,6],[0,3,5],[1,3,15],[2,3,4]]
 *   Output: 19 (minimum spanning tree total weight)
 */
