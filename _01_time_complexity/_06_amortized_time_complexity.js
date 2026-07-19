// 6. Amortized Time Complexity (Dynamic Array Push)

/**
 * Pattern Used: Amortized Analysis
 * Why this pattern: Some individual operations are occasionally expensive but
 * rare enough that, averaged over a long sequence of operations, the cost per
 * operation is small - a dynamic array (like JavaScript's Array.push) doubles
 * its backing storage and copies existing elements only occasionally, so push
 * is O(n) in the rare resize case but O(1) amortized across many pushes.
 *
 * Interview Scenario:
 * "Interviewers ask why 'push is O(1)' is only true on average: explain how
 * doubling the capacity of a dynamic array on overflow keeps the total cost
 * of n pushes at O(n), giving O(1) amortized time per push."
 *
 * Example:
 *   Input:  arr.push(x) called n times on a dynamic array that doubles capacity on overflow
 *   Output: O(n) total cost across all n pushes -> O(1) amortized per push
 */
