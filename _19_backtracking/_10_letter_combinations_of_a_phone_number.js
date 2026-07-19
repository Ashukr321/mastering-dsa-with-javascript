// 10. Generate All Possible Letter Combinations That A Given Digit String Could Represent On A Phone Keypad

/**
 * Pattern Used: Backtracking - Choose/Explore/Unchoose Across A Digit-To-Letters Mapping
 * Why this pattern: Recurses digit by digit, trying each letter mapped to the
 * current digit, appending it to the path before recursing into the next
 * digit and removing it again (unchoose) to try the next letter option.
 *
 * Interview Scenario:
 * "Classic phone-keypad backtracking question: given a string of digits from
 * 2-9, return all possible letter combinations the number could represent,
 * using the standard telephone keypad mapping."
 *
 * Example:
 *   Input:  digits = "23"
 *   Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 */
