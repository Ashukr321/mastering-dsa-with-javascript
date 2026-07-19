// 6. Exponential Search

/**
 * Pattern Used: Exponential Search (Range Doubling + Binary Search)
 * Why this pattern: Finds an upper bound range by repeatedly doubling the
 * index (1, 2, 4, 8, ...) until the target could plausibly lie inside it, then
 * runs binary search within that bounded range, giving O(log n) time without
 * needing to know the array size up front.
 *
 * Interview Scenario:
 * "Asked for unbounded or streaming sorted data where the size isn't known in
 * advance, e.g. searching a sorted, potentially infinite list or API-paginated
 * results: locate the target while minimizing probes into the unknown range."
 *
 * Example:
 *   Input:  arr = [1, 2, 3, ..., 1000] (sorted, size unknown upfront), target = 200
 *   Output: 199 (index of 200, found after doubling range to [128, 256] then binary search)
 */
