// 7. Design A Stack That Supports Get-Minimum In O(1)

/**
 * Pattern Used: Auxiliary Stack (Min-Tracking Companion Stack)
 * Why this pattern: Maintaining a second stack that mirrors the main stack
 * and always tracks the minimum seen so far (pushing a new min whenever one
 * appears, and popping it in sync with the main stack) gives O(1) access to
 * the current minimum without scanning on every query.
 *
 * Interview Scenario:
 * "Popular design-a-data-structure interview question: implement a stack
 * that supports push, pop, top and retrieving the minimum element, all in
 * O(1) time, discussing the trade-off of extra space for the companion
 * stack."
 *
 * Example:
 *   Input:  push(5), push(3), push(7), getMin(), pop(), getMin()
 *   Output: getMin() => 3, after pop() stack top is 3, getMin() => 3
 */
