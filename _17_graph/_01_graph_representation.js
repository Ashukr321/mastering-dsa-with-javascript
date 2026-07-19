// 1. Represent A Graph Using An Adjacency List And An Adjacency Matrix

/**
 * Pattern Used: Graph Representation (Adjacency List & Adjacency Matrix)
 * Why this pattern: Most graph algorithms first need the raw edge data turned
 * into a structure that supports fast neighbor lookups; adjacency list gives
 * O(V+E) space for sparse graphs while adjacency matrix gives O(1) edge checks
 * at O(V^2) space for dense graphs.
 *
 * Interview Scenario:
 * "Given a list of edges for a graph with V vertices, build both an adjacency
 * list and an adjacency matrix representation, then discuss the space/time
 * trade-offs of each when the interviewer asks you to check if two nodes are
 * directly connected."
 *
 * Example:
 *   Input:  V = 4, edges = [[0,1],[0,2],[1,2],[2,3]]
 *   Output: adjacencyList = { 0: [1,2], 1: [0,2], 2: [0,1,3], 3: [2] }
 *           adjacencyMatrix = [[0,1,1,0],[1,0,1,0],[1,1,0,1],[0,0,1,0]]
 */
