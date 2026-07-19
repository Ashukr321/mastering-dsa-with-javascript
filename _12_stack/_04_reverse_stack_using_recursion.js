// 4. Reverse A Stack Using Recursion (No Extra Data Structure)

/**
 * Pattern Used: Recursion - Insert-at-Bottom Technique
 * Why this pattern: Recursively popping every element down to an empty
 * stack, then using a helper recursion to insert each popped element at the
 * bottom on the way back up, reverses the stack using only the call stack
 * as auxiliary storage instead of another array or stack.
 *
 * Interview Scenario:
 * "Classic recursion-depth test: reverse the contents of a stack without
 * using any loop or second stack/queue, relying purely on recursive calls
 * and their call-stack frames to hold state."
 *
 * Example:
 *   Input:  stack (top -> bottom) = [3, 2, 1]
 *   Output: stack (top -> bottom) = [1, 2, 3]
 */
