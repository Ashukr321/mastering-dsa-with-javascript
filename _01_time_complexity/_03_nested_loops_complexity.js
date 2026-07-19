// 3. Nested Loops And Their Combined Time Complexity

/**
 * Pattern Used: Loop Counting for Big-O (Multiplicative Rule)
 * Why this pattern: When loops are nested, the complexities multiply because
 * the inner loop runs completely for every single iteration of the outer
 * loop, so two nested loops each of size n give O(n^2), three give O(n^3),
 * and an inner loop bounded by a different variable m gives O(n * m).
 *
 * Interview Scenario:
 * "Common in interviews on brute-force pair-finding solutions: given nested
 * for loops comparing every pair of elements in an array, explain why the
 * result is O(n^2) and how that motivates optimizing with hashing or sorting."
 *
 * Example:
 *   Input:  for (i = 0; i < n; i++) { for (j = 0; j < n; j++) { ... } }
 *   Output: O(n^2)
 *
 *   Input:  for (i = 0; i < n; i++) { for (j = 0; j < m; j++) { ... } }
 *   Output: O(n * m)
 */
