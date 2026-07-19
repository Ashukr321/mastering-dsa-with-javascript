// 5. Best Case, Average Case, And Worst Case Analysis

/**
 * Pattern Used: Case-Based Asymptotic Analysis
 * Why this pattern: The same algorithm can behave differently depending on
 * the input arrangement, so complexity is analyzed across the luckiest input
 * (best case), a typical/random input (average case), and the unluckiest
 * input (worst case) - interviewers usually care most about worst case since
 * it guarantees an upper bound regardless of input.
 *
 * Interview Scenario:
 * "Classic follow-up on Quicksort: explain why its average case is O(n log n)
 * but its worst case is O(n^2) when the pivot is always the smallest or
 * largest element, and how pivot selection strategy affects which case
 * dominates in practice."
 *
 * Example:
 *   Input:  Linear search for target in arr = [5, 3, 8, 1, 9]
 *   Output: Best case O(1) (target is first), Worst case O(n) (target is last or missing)
 */
