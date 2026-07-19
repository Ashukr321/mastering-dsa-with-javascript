// 9. Task Scheduler (arrange CPU tasks with a cooldown using a heap)
// LeetCode: https://leetcode.com/problems/task-scheduler/

/**
 * Pattern Used: Max-Heap / Greedy Scheduling via Heap
 * Why this pattern: Always picking the most frequent remaining task off a
 * max-heap first (and holding recently-used tasks in a cooldown queue) is the
 * greedy strategy that minimizes total idle CPU cycles while respecting the
 * required cooldown between repeats of the same task.
 *
 * Interview Scenario:
 * "CPU-scheduling question popular at Facebook/Meta: given a list of tasks
 * and a cooldown period n between two same tasks, find the minimum number of
 * intervals (including idle slots) needed to complete all tasks, using a
 * max-heap to always schedule the most frequent task next."
 *
 * Example:
 *   Input:  tasks = ["A","A","A","B","B","B"], n = 2
 *   Output: 8 (e.g. A -> B -> idle -> A -> B -> idle -> A -> B)
 */
