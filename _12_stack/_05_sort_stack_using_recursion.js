// 5. Sort A Stack Using Recursion (No Extra Data Structure)

/**
 * Pattern Used: Recursion - Insert-in-Sorted-Order Technique
 * Why this pattern: Recursively popping every element down to an empty
 * stack, then using a helper recursion to insert each popped element back in
 * its correct sorted position, sorts the stack using only the call stack as
 * auxiliary storage instead of another array or stack.
 *
 * Interview Scenario:
 * "Extension of the stack-reversal problem: sort a stack in ascending order
 * (smallest on top) without using any loop, array, or extra explicit stack -
 * only recursive function calls."
 *
 * Example:
 *   Input:  stack (top -> bottom) = [3, 1, 4, 2]
 *   Output: stack (top -> bottom) = [1, 2, 3, 4]
 */
