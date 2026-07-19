// 3. Implement a Circular Queue

/**
 * Pattern Used: Circular Buffer / Modulo Indexing
 * Why this pattern: Wrapping the front and rear pointers around a fixed-size
 * array using modulo arithmetic reuses freed slots, avoiding the wasted space
 * left behind by a simple linear queue.
 *
 * Interview Scenario:
 * "Design a fixed-capacity circular queue (like LeetCode's MyCircularQueue)
 * supporting enqueue, dequeue, front, rear, isEmpty, isFull in O(1) without
 * shifting elements."
 *
 * Example:
 *   Input:  capacity = 3; enqueue(1), enqueue(2), enqueue(3), dequeue(), enqueue(4)
 *   Output: queue holds [2, 3, 4] (slot 0 reused after wrap-around)
 */
