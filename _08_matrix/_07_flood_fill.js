// 7. Perform a flood fill from a starting pixel, replacing the connected same-colored region with a new color

/**
 * Pattern Used: DFS/BFS on Grid (Connected Region Recoloring)
 * Why this pattern: Starting from the source pixel, DFS/BFS spreads to every
 * 4-directionally connected cell that shares the original color, recoloring
 * them - the same connectivity idea used by the paint-bucket tool in image
 * editors.
 *
 * Interview Scenario:
 * "Asked at Google/Adobe: 'Implement the paint-bucket fill tool for an image
 * editor - given a starting pixel coordinate and a new color, recolor the
 * entire connected region touching that pixel.'"
 *
 * Example:
 *   Input:  image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2
 *   Output: [[2,2,2],[2,2,0],[2,0,1]]
 */
