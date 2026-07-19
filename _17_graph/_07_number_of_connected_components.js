// 7. Count The Number Of Connected Components In An Undirected Graph

/**
 * Pattern Used: Union-Find / Disjoint Set
 * Why this pattern: Union-Find groups vertices into sets by unioning the
 * endpoints of every edge, so the number of distinct root parents left at the
 * end equals the number of connected components, without needing a full
 * traversal per component.
 *
 * Interview Scenario:
 * "Given n nodes and a list of undirected edges, find how many separate
 * connected components exist - a common framing for questions like counting
 * friend circles or isolated network clusters."
 *
 * Example:
 *   Input:  n = 5, edges = [[0,1],[1,2],[3,4]]
 *   Output: 2 (component {0,1,2} and component {3,4})
 */
