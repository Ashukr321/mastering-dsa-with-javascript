// 7. Check If a Queue Is Empty or Full

/**
 * Pattern Used: Queue - FIFO Simulation (Boundary/State Checks)
 * Why this pattern: Tracking size (or front/rear pointers plus capacity) lets
 * isEmpty and isFull answer in O(1), which is essential before every enqueue
 * or dequeue call to avoid underflow/overflow errors.
 *
 * Interview Scenario:
 * "Add isEmpty() and isFull() guards to a fixed-capacity queue implementation,
 * and explain how you'd detect these states correctly in a circular queue
 * where front and rear can collide for both conditions."
 *
 * Example:
 *   Input:  capacity = 3; queue = [], then after enqueue(1), enqueue(2), enqueue(3)
 *   Output: isEmpty() -> true then false; isFull() -> false then true
 */
