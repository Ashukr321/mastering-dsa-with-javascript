// 8. Determine If All Courses Can Be Finished Given Their Prerequisites

/**
 * Pattern Used: Topological Sort / DFS on Graph (Cycle Detection)
 * Why this pattern: Courses can only all be completed if their prerequisite
 * graph has no cycle, so the problem reduces to directed-cycle detection or
 * successfully producing a topological order covering every course.
 *
 * Interview Scenario:
 * "Given numCourses and a list of prerequisite pairs [course, prerequisite],
 * determine whether it is possible to finish all courses without running into
 * a circular dependency."
 *
 * Example:
 *   Input:  numCourses = 2, prerequisites = [[1,0]]
 *   Output: true (take course 0, then course 1)
 */
