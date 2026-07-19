// 4. Minimum Number of Platforms Needed

/**
 * Pattern Used: Greedy - Sort Arrivals and Departures, Two Pointer Sweep
 * Why this pattern: Sorting arrival and departure times separately and
 * sweeping through them lets you track the number of trains present at any
 * moment, greedily allocating/freeing a platform for each arrival/departure
 * to find the peak concurrent need.
 *
 * Interview Scenario:
 * "You're given arrival and departure times of trains at a railway station.
 * Find the minimum number of platforms required so that no train has to
 * wait."
 *
 * Example:
 *   Input:  arrival = [900, 940, 950, 1100, 1500, 1800], departure = [910, 1200, 1120, 1130, 1900, 2000]
 *   Output: 3 (at most 3 trains are at the station simultaneously)
 */
