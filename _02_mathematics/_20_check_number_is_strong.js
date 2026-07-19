// 20. Check if the number is a strong number or not
/**
 * Pattern Used: Digit Extraction + Factorial Accumulation
 * Why this pattern: Each digit is extracted via `% 10`/`/ 10`, its factorial is computed, and the factorials are
 * summed; the number is "strong" when that sum equals the original number.
 *
 * Interview Scenario:
 * "Combines two sub-skills interviewers like to test together -- digit extraction and factorial computation --
 * into one check, e.g. 145 = 1! + 4! + 5! = 1 + 24 + 120 = 145."
 *
 * Example:
 *   Input:  145
 *   Output: true
 */
