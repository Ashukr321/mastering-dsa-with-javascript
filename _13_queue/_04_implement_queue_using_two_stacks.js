// 4. Implement a Queue Using Two Stacks

/**
 * Pattern Used: Two Stacks Simulating a Queue
 * Why this pattern: One stack absorbs incoming elements while the other
 * reverses order on demand for outgoing elements, turning a stack's LIFO
 * behavior into amortized O(1) FIFO behavior.
 *
 * Interview Scenario:
 * "Given only stack primitives (push/pop), implement a queue's enqueue and
 * dequeue operations - a classic 'convert one structure into another'
 * interview question."
 *
 * Example:
 *   Input:  enqueue(1), enqueue(2), dequeue(), enqueue(3), dequeue()
 *   Output: 1, then 2 (removed in FIFO order despite the underlying stacks)
 */
