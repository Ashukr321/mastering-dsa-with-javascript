// 10. Implement A Queue Using Two Stacks

/**
 * Pattern Used: Two Stacks Technique (Input/Output Stack Pair)
 * Why this pattern: Pushing always goes onto an "in" stack, and when the
 * "out" stack is empty its entire contents are refilled by popping "in"
 * once - reversing the order so the oldest element surfaces first, which
 * simulates FIFO behavior with amortized O(1) enqueue/dequeue.
 *
 * Interview Scenario:
 * "Classic data-structure-simulation question testing whether you can build
 * one ADT out of another: implement a Queue (enqueue/dequeue) using only two
 * Stack instances, and explain the amortized cost of the transfer step."
 *
 * Example:
 *   Input:  enqueue(1), enqueue(2), enqueue(3), dequeue(), dequeue()
 *   Output: dequeue() => 1, dequeue() => 2, remaining queue front => 3
 */
