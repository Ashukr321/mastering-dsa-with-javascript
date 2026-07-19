// 23. Check if the number is a Harshad number or not
/**
 * Pattern Used: Digit Sum + Divisibility Check
 * Why this pattern: The digits are summed via repeated `% 10`/`/ 10` extraction, and the original number is
 * tested for exact divisibility by that digit sum -- a Harshad (Niven) number divides its own digit sum evenly.
 *
 * Interview Scenario:
 * "Combines digit-sum computation with a divisibility check in one problem, e.g. 18's digits sum to 9 and
 * 18 % 9 === 0, so it's a Harshad number -- tests composing two simple sub-routines correctly."
 *
 * Example:
 *   Input:  18
 *   Output: true
 */
