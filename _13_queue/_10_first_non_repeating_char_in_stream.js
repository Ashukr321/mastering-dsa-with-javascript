// 10. First Non-Repeating Character in a Stream Using a Queue

/**
 * Pattern Used: Queue + Frequency Map (Streaming State)
 * Why this pattern: A queue holds candidate characters in arrival order while
 * a frequency map tracks counts, so stale (now-repeated) characters at the
 * front can be dropped lazily, answering "first non-repeating so far" after
 * every new character in O(1) amortized.
 *
 * Interview Scenario:
 * "Characters arrive one at a time from a stream; after each one, report the
 * first character seen so far that hasn't repeated yet - implement this
 * online (no re-scanning the whole stream each time)."
 *
 * Example:
 *   Input:  stream = "aabc"
 *   Output: ["a", "-", "b", "b"] (first non-repeating char after each insertion)
 */
