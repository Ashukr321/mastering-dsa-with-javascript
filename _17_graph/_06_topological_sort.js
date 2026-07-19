// 6. Produce A Valid Topological Ordering Of A Directed Acyclic Graph

/**
 * Pattern Used: Topological Sort (Kahn's Algorithm / DFS-Based)
 * Why this pattern: Orders vertices so that every directed edge u -> v places
 * u before v; Kahn's algorithm repeatedly removes zero in-degree nodes with a
 * queue, while the DFS-based approach pushes nodes onto a stack after all
 * their descendants are fully explored.
 *
 * Interview Scenario:
 * "Given a directed acyclic graph representing task dependencies, produce a
 * valid order to complete all tasks such that every prerequisite finishes
 * before the task that depends on it."
 *
 * Example:
 *   Input:  V = 4, edges = [[0,1],[0,2],[1,3],[2,3]]
 *   Output: [0, 1, 2, 3] (one valid topological order)
 */
