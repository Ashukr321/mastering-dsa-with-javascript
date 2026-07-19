// 10. Find The Shortest Path From A Source Node In A Graph That May Have Negative Edge Weights

/**
 * Pattern Used: Bellman-Ford Algorithm
 * Why this pattern: Relaxes every edge V-1 times to guarantee shortest
 * distances even with negative edge weights, and can run one extra pass to
 * detect if a negative-weight cycle makes some distances undefined.
 *
 * Interview Scenario:
 * "Given a weighted directed graph that may contain negative edge weights,
 * find the shortest path from a source node to all others, and report if a
 * negative-weight cycle makes the answer impossible - e.g. detecting
 * arbitrage opportunities in currency exchange rates."
 *
 * Example:
 *   Input:  V = 3, edges = [[0,1,4],[0,2,5],[1,2,-3]], source = 0
 *   Output: [0, 4, 1] (shortest distance from node 0 to nodes 0,1,2)
 */
