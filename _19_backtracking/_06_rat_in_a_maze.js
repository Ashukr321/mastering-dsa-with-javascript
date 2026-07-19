// 6. Find All Paths For A Rat To Travel From The Top-Left To The Bottom-Right Of A Maze

/**
 * Pattern Used: Backtracking - Choose/Explore/Unchoose On A Grid
 * Why this pattern: Moves the rat one step at a time in the allowed
 * directions, marks the current cell visited before recursing and unmarks it
 * on the way back, so dead ends are abandoned without revisiting cells
 * already on the current path.
 *
 * Interview Scenario:
 * "Grid-based backtracking question testing path exploration with visited
 * state: given an n x n maze containing blocked cells, find all paths a rat
 * can take from the top-left cell to the bottom-right cell."
 *
 * Example:
 *   Input:  maze = [
 *     [1, 0, 0, 0],
 *     [1, 1, 0, 1],
 *     [0, 1, 0, 0],
 *     [1, 1, 1, 1]
 *   ]
 *   Output: ["DDRDRR", "DRDDRR"]
 */
