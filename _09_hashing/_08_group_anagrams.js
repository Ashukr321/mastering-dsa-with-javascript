// 8. Group Anagrams Together

/**
 * Pattern Used: Hashing / Canonical Key Grouping
 * Why this pattern: Sorting (or frequency-encoding) each string produces a
 * canonical key shared by all its anagrams, so a hash map from that key to a
 * list of original strings groups every anagram together in roughly
 * O(n * k log k) time.
 *
 * Interview Scenario:
 * "Given a large list of words, group all words that are anagrams of each
 * other, as a preprocessing step for a word-game or dictionary feature."
 *
 * Example:
 *   Input:  strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
 *   Output: [["eat","tea","ate"], ["tan","nat"], ["bat"]]
 */
