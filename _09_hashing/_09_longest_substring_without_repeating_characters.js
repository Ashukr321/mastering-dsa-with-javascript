// 9. Find The Length Of The Longest Substring Without Repeating Characters

/**
 * Pattern Used: Hashing / Sliding Window With Last-Seen Index Map
 * Why this pattern: A hash map storing the last index each character was
 * seen at lets a sliding window jump the left boundary directly past a
 * repeated character instead of shrinking one step at a time, giving O(n)
 * time instead of O(n^2).
 *
 * Interview Scenario:
 * "Given a stream of typed characters, find the longest run of text typed
 * without repeating a character, useful for a typing-analytics or
 * autocomplete feature."
 *
 * Example:
 *   Input:  s = "abcabcbb"
 *   Output: 3 ("abc" is the longest substring without repeats)
 */
