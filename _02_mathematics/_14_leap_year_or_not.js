// 14. Leap year or not
/**
 * Pattern Used: Divisibility Rule Evaluation
 * Why this pattern: Leap years are determined by a chain of modulo checks -- divisible by 4 AND (not divisible
 * by 100 OR divisible by 400) -- encoding the Gregorian calendar rule directly as boolean logic.
 *
 * Interview Scenario:
 * "A classic 'know your domain rules' question: candidates often forget the century exception (1900 is not a
 * leap year but 2000 is), which is exactly what this problem is designed to expose."
 *
 * Example:
 *   Input:  2000
 *   Output: true
 */
