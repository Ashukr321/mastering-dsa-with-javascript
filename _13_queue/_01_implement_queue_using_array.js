// 1. Implement a Queue Using an Array

/**
 * Pattern Used: Queue - FIFO Simulation (Array-Backed)
 * Why this pattern: An array natively supports push/shift, so wrapping it in
 * an enqueue/dequeue API demonstrates the core FIFO (first-in-first-out)
 * contract before optimizing for the O(n) shift cost with pointers or a
 * circular buffer.
 *
 * Interview Scenario:
 * "Build a Queue class from scratch using only a plain array - implement
 * enqueue, dequeue, peek, isEmpty - and be ready to discuss why shift() is
 * O(n) and how you'd fix it."
 *
 * Example:
 *   Input:  enqueue(10), enqueue(20), enqueue(30), dequeue()
 *   Output: 10 (removed), queue now holds [20, 30]
 */
