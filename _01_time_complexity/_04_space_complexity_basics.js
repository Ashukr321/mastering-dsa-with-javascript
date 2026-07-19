// 4. Space Complexity Basics

/**
 * Pattern Used: Space Complexity Analysis
 * Why this pattern: Measures the extra (auxiliary) memory an algorithm uses
 * relative to input size n, separate from the input itself - counting things
 * like additional arrays, hash maps, or recursion call-stack frames, so an
 * algorithm can be judged on memory usage in addition to speed.
 *
 * Interview Scenario:
 * "Interviewers often ask 'can you do this in O(1) extra space?' right after
 * a correct O(n) space solution, expecting you to distinguish input space
 * from auxiliary space and to spot hidden space costs like recursion depth."
 *
 * Example:
 *   Input:  function that creates a new array of size n to store results
 *   Output: O(n) space
 *
 *   Input:  function that swaps elements in place using only a few variables
 *   Output: O(1) space
 */
