// 2. How To Calculate The Time Complexity Of A Single Loop

/**
 * Pattern Used: Loop Counting for Big-O
 * Why this pattern: Count how many times the loop body executes as a function
 * of the input size n - a loop that runs n times is O(n), a loop that halves
 * (or doubles) its counter each iteration is O(log n), regardless of how
 * simple or complex the constant-time work inside the body is.
 *
 * Interview Scenario:
 * "Interviewers ask you to derive complexity line by line: walk through a for
 * loop iterating over an array and justify why the number of iterations,
 * not the code inside them, drives the Big-O."
 *
 * Example:
 *   Input:  for (let i = 0; i < n; i++) { ... constant work ... }
 *   Output: O(n)
 *
 *   Input:  for (let i = 1; i < n; i *= 2) { ... constant work ... }
 *   Output: O(log n)
 */
