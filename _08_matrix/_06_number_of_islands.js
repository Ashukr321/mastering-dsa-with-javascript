// 6. Count the number of islands (connected groups of 1s) in a binary grid

/**
 * Pattern Used: DFS/BFS on Grid (Connected Components)
 * Why this pattern: Each unvisited land cell (1) can be expanded into its
 * full connected component via DFS/BFS across the 4 directions, marking
 * visited cells along the way so every island is counted exactly once.
 *
 * Interview Scenario:
 * "Classic Amazon/Google grid question: 'Given a satellite map represented
 * as a grid of land (1) and water (0), count how many separate islands
 * exist,' testing grid traversal and visited-state management."
 *
 * Example:
 *   Input:  [[1,1,0,0],[1,1,0,0],[0,0,1,0],[0,0,0,1]]
 *   Output: 3
 */
