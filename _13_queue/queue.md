# Queue - Quick Notes

- **FIFO**: First In, First Out. Elements are added at the `rear`/`back` and removed from the `front` - the opposite discipline of a stack (LIFO).
- **Core operations**: `enqueue` (add to rear), `dequeue` (remove from front), `peek`/`front` (read without removing), `isEmpty`, `isFull` (for bounded queues).
- **Array-backed queue**: simple, but `shift()` on dequeue is O(n) unless you track a `front` index or wrap around (circular queue).
- **Linked-list-backed queue**: `head`/`tail` pointers give O(1) enqueue and dequeue with no shifting.
- **Circular queue**: fixed-size buffer where `front`/`rear` wrap around using modulo arithmetic, reusing freed slots instead of wasting them like a plain linear queue.
- **Queue via two stacks / Stack via two queues**: classic interview conversions - one structure is built by combining the ordering behavior of the other.
- **Deque (double-ended queue)**: supports insert/remove at both ends; used in sliding-window-maximum-style problems via a monotonic deque.
- **Priority queue**: not strictly FIFO - elements come out in priority order, usually implemented with a binary heap (O(log n) insert/extract) instead of scanning a plain queue.
- **Common use cases**: BFS traversal, task/job scheduling, rate limiting, streaming/windowed computations, circular buffering (e.g. producer-consumer).
