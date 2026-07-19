// 17. Tower of Hanoi
/**
 * Pattern Used: Divide and Conquer / Multiple Recursive Calls per Step
 * Why this pattern: Solving Tower of Hanoi for n disks is expressed as two recursive sub-problems of size n-1 (move n-1 disks out of the way, then back), plus one direct move, the quintessential example of a problem defined purely by its recursive structure.
 *
 * Interview Scenario:
 * "A signature interview question (Microsoft, Oracle) used specifically to test recursive problem decomposition skills, often with a follow-up asking for the minimum number of moves formula (2^n - 1)."
 *
 * Example:
 *   Input:  n = 3 disks, source=A, aux=B, dest=C
 *   Output: 7 moves printed, ending with all disks moved from A to C
 */
