// 9. Find The Shortest Path From A Source Node In A Weighted Graph With Non-Negative Edges

/**
 * Pattern Used: Dijkstra's Shortest Path
 * Why this pattern: Greedily picks the unvisited node with the smallest known
 * distance (via a min-heap/priority queue) and relaxes its neighbors, which
 * guarantees the shortest distance is finalized correctly as long as no edge
 * weight is negative.
 *
 * Interview Scenario:
 * "Given a weighted directed graph and a source node, find the shortest
 * distance from the source to every other node - the standard question for
 * network routing or minimum-delay signal propagation."
 *
 * Example:
 *   Input:  graph = { 0: [[1,4],[2,1]], 1: [[3,1]], 2: [[1,2],[3,5]], 3: [] }, source = 0
 *   Output: [0, 3, 1, 4] (shortest distance from node 0 to nodes 0,1,2,3)
 */
