// 8. Common Complexity Classes Cheat Sheet (O(1) To O(2^n))

/**
 * Pattern Used: Complexity Class Comparison
 * Why this pattern: Recognizing the common growth-rate classes and a
 * representative algorithm for each lets you quickly estimate whether a
 * proposed solution will scale, and gives a shared vocabulary for comparing
 * approaches during an interview instead of reasoning from scratch every time.
 *
 * Interview Scenario:
 * "Interviewers expect instant recognition: given a proposed approach, name
 * its complexity class and a well-known algorithm with the same class, e.g.
 * 'that nested-loop pair check is O(n^2), same class as bubble sort' - to
 * quickly gauge whether it will scale before writing any code."
 *
 * Example:
 *   Input:  O(1) constant      -> array index access, hash map get/set
 *   Input:  O(log n) log       -> binary search
 *   Input:  O(n) linear        -> linear search, single loop
 *   Input:  O(n log n) linearithmic -> merge sort, quicksort (average)
 *   Input:  O(n^2) quadratic   -> bubble sort, nested loops over same array
 *   Input:  O(n^3) cubic       -> triple nested loops, naive matrix multiplication
 *   Input:  O(2^n) exponential -> naive recursive Fibonacci, generating all subsets
 *   Output: Growth order (fastest to slowest):
 *           O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(n^3) < O(2^n)
 */
