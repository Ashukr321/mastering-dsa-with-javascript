// 8. Priority Queue Concept

/**
 * Pattern Used: Priority Queue via (Binary) Heap
 * Why this pattern: A binary heap keeps the highest (or lowest) priority
 * element accessible at the root, giving O(log n) insert/extract instead of
 * scanning the whole queue to find the highest-priority item every time.
 *
 * Interview Scenario:
 * "Explain how a priority queue differs from a regular FIFO queue, then
 * implement a min-priority-queue backed by a binary heap array supporting
 * insert and extractMin."
 *
 * Example:
 *   Input:  insert(5), insert(1), insert(3), extractMin()
 *   Output: 1 (removed, smallest priority value, not the first one inserted)
 */
