// 4. Check If Two Strings Are Anagrams Using A HashMap

/**
 * Pattern Used: Hashing / Character Frequency Comparison
 * Why this pattern: Building a frequency map of characters for one string and
 * decrementing it while scanning the other confirms both strings use exactly
 * the same characters the same number of times, in O(n) time.
 *
 * Interview Scenario:
 * "Given two words, determine if one is an anagram of the other (e.g. for a
 * word-game validator), and explain why counting characters beats sorting
 * both strings first."
 *
 * Example:
 *   Input:  s1 = "listen", s2 = "silent"
 *   Output: true
 */
