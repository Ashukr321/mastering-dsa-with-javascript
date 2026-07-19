// 1. Print the number in ascending order using recursion
/**
 * Pattern Used: Recursion - Base Case + Recurrence (Post-order print / unwind on the way back up)
 * Why this pattern: Printing 1..n requires the recursive call to go all the way down to the base case first, and the actual print happens as the call stack unwinds, making it a clean intro example of 'work after the recursive call'.
 *
 * Interview Scenario:
 * "A classic warm-up question at almost every junior dev interview (Amazon, TCS Digital, Infosys) to check if a candidate actually understands the call stack instead of just memorizing loops: 'Without using a loop, print numbers 1 to n.'"
 *
 * Example:
 *   Input:  n = 5
 *   Output: 1 2 3 4 5
 */
