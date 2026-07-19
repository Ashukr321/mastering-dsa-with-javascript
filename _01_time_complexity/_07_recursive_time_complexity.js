// 7. Time Complexity Of Recursive Algorithms (Recurrence Relations)

/**
 * Pattern Used: Recurrence Relations (Recursion Tree / Master Theorem)
 * Why this pattern: A recursive algorithm's running time is expressed as a
 * recurrence relation T(n) that describes the cost of the current call in
 * terms of its recursive subcalls, then solved by expanding a recursion tree
 * or applying the Master Theorem to get a closed-form Big-O.
 *
 * Interview Scenario:
 * "Interviewers ask you to write the recurrence for a divide-and-conquer
 * solution and solve it: given Merge Sort's T(n) = 2T(n/2) + O(n), show why
 * the Master Theorem gives O(n log n), versus naive recursive Fibonacci's
 * T(n) = T(n-1) + T(n-2) + O(1), which gives exponential O(2^n)."
 *
 * Example:
 *   Input:  T(n) = 2T(n/2) + O(n)   (e.g. Merge Sort)
 *   Output: O(n log n)
 *
 *   Input:  T(n) = T(n-1) + T(n-2) + O(1)   (naive recursive Fibonacci)
 *   Output: O(2^n)
 */
