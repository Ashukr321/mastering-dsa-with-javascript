// 7. Design a search autocomplete system that suggests top sentences as the user types
// LeetCode: https://leetcode.com/problems/design-search-autocomplete-system/

/**
 * Pattern Used: Trie + Heap/Sorting (Ranked Prefix Suggestions)
 * Why this pattern: Historical sentences are stored in a trie keyed by character with hot-degree counts at terminal nodes, so as the user types each character the system walks to the matching trie node and collects/ranks all completions beneath it by frequency then lexicographic order.
 *
 * Interview Scenario:
 * "System-design-flavored coding round asked at Google/Uber: build an AutocompleteSystem that, given a stream of typed characters ending in '#', returns the top 3 historical sentences matching the current input prefix ranked by hot degree then alphabetically."
 *
 * Example:
 *   Input:  sentences = ["i love you","island","iroman","i love leetcode"], times = [5,3,2,2]; input('i'); input(' '); input('a'); input('#')
 *   Output: [["i love you","island","i love leetcode"], ["i love you","i love leetcode"], [], []]
 */
