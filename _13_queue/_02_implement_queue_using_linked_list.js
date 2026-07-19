// 2. Implement a Queue Using a Linked List

/**
 * Pattern Used: Queue - FIFO Simulation (Linked List-Backed)
 * Why this pattern: Maintaining head and tail pointers lets enqueue and
 * dequeue both run in O(1) with no shifting of elements, unlike an
 * array-backed queue.
 *
 * Interview Scenario:
 * "Implement a Queue using a singly linked list with head and tail
 * references so both enqueue and dequeue are O(1) - a common ask when
 * comparing array vs. linked list trade-offs."
 *
 * Example:
 *   Input:  enqueue(1), enqueue(2), enqueue(3), dequeue()
 *   Output: 1 (removed), queue now holds 2 -> 3
 */
