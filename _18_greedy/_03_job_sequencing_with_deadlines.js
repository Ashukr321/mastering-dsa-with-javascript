// 3. Job Sequencing With Deadlines

/**
 * Pattern Used: Greedy - Sort by Profit, Schedule at Latest Available Slot
 * Why this pattern: Sorting jobs by descending profit and greedily placing
 * each job in the latest free time slot before its deadline maximizes total
 * profit while respecting the one-job-per-slot and deadline constraints.
 *
 * Interview Scenario:
 * "Each job has a deadline and a profit, and takes one unit of time to
 * complete; only one job can run at a time. Find the sequence of jobs that
 * maximizes total profit, given that a job only earns its profit if it
 * finishes by its deadline."
 *
 * Example:
 *   Input:  jobs = [{id: 'a', deadline: 2, profit: 100}, {id: 'b', deadline: 1, profit: 19}, {id: 'c', deadline: 2, profit: 27}, {id: 'd', deadline: 1, profit: 25}, {id: 'e', deadline: 3, profit: 15}]
 *   Output: ['a', 'c', 'e'] with total profit 142 (jobs scheduled in slots 2, 1, 3 respectively)
 */
