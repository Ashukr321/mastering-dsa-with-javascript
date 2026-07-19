// 5. Implement a Stack Using Two Queues

/**
 * Pattern Used: Two Queues Simulating a Stack
 * Why this pattern: By rotating elements between two queues so the most
 * recently added item ends up at the front, FIFO structures can be made to
 * expose LIFO (push/pop) behavior.
 *
 * Interview Scenario:
 * "The inverse of the classic problem: given only queue primitives
 * (enqueue/dequeue), implement a stack's push and pop, and discuss whether
 * push or pop should carry the O(n) cost."
 *
 * Example:
 *   Input:  push(1), push(2), push(3), pop()
 *   Output: 3 (removed, last one pushed, simulating LIFO order)
 */
