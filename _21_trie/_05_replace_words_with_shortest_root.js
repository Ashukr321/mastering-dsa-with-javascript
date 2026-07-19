// 5. Replace every derivative word in a sentence with its shortest dictionary root
// LeetCode: https://leetcode.com/problems/replace-words/

/**
 * Pattern Used: Trie (Shortest-Prefix Lookup)
 * Why this pattern: Storing all dictionary roots in a trie lets each sentence word be resolved by walking down the trie and stopping at the first end-of-word marker, giving the shortest matching root in O(word length) instead of testing every root as a prefix.
 *
 * Interview Scenario:
 * "Practical NLP-flavored interview question: given a dictionary of word roots and a sentence, replace all derivative words in the sentence with their shortest matching root, e.g. stemming 'cattle' down to 'cat'."
 *
 * Example:
 *   Input:  dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
 *   Output: "the cat was rat by the bat"
 */
