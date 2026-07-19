// 13. Find The Celebrity In A Party Using A Stack

/**
 * Pattern Used: Stack - Elimination Duel Technique
 * Why this pattern: Pushing every guest onto a stack, then repeatedly
 * popping two at a time and eliminating whichever one cannot be the
 * celebrity (based on the "knows" relation), narrows the candidates down to
 * a single possible celebrity in O(n) comparisons instead of checking every
 * pair with an O(n^2) matrix scan.
 *
 * Interview Scenario:
 * "Popular 'find the celebrity' interview puzzle: given n people where a
 * celebrity is someone everyone else knows but who knows no one else, and
 * only a knows(a, b) relation is available, find the celebrity (or report
 * none exists) using a stack to eliminate non-candidates efficiently."
 *
 * Example:
 *   Input:  n = 4, knows = matrix where person 2 is known by everyone and
 *           knows no one
 *   Output: 2 (the celebrity)
 */
