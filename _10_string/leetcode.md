# LeetCode Equivalent Problems (Strings)

This maps every file in `_10_string` to its closest LeetCode equivalent (or the closest related problem when no exact match exists), plus a curated list of additional practice problems covering the same patterns.

## Part A — File-to-LeetCode Mapping

| # | Problem Statement | Difficulty | LeetCode Link |
|---|-------------------|------------|----------------|
| 1 | Check string anagram or not | Easy | [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/) |
| 2 | Check string is palindrome or not | Easy | [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) |
| 3 | Reverse the string using reverse methods | Easy | [344. Reverse String](https://leetcode.com/problems/reverse-string/) |
| 4 | Check two string is permutation or not | Medium | [567. Permutation in String](https://leetcode.com/problems/permutation-in-string/) (related) |
| 5 | Reverse the string without STL methods | Easy | [344. Reverse String](https://leetcode.com/problems/reverse-string/) |
| 6 | First occurrence of string | Easy | [28. Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) |
| 7 | Return the highest occurring word in the sentence | Medium | [692. Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/) (related) |
| 8 | Remove given character from string | Easy | [27. Remove Element](https://leetcode.com/problems/remove-element/) (related, analogous in-place filtering) |
| 9 | Get sub string | — | N/A (fundamental slicing operation, no direct LeetCode equivalent) |
| 10 | Count the number of vowels, consonants, spaces in string | Easy | [1704. Determine if String Halves Are Alike](https://leetcode.com/problems/determine-if-string-halves-are-alike/) (related) |
| 11 | Find ASCII value of character | — | N/A (fundamental ASCII/character operation) |
| 12 | Remove spaces from string | — | N/A (fundamental whitespace-filtering operation) |
| 13 | Remove brackets from algebraic expression | Hard | [224. Basic Calculator](https://leetcode.com/problems/basic-calculator/) (related, stack-based sign propagation) |
| 14 | Sums of numbers in a string | Medium | [8. String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi/) (related, digit parsing) |
| 15 | Capitalize first and last characters in string | — | N/A (fundamental indexed character operation) |
| 16 | Calculate frequency of character of string | Easy | [1189. Maximum Number of Balloons](https://leetcode.com/problems/maximum-number-of-balloons/) (related, frequency-map application) |
| 17 | Find non-repeating character in string | Easy | [387. First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/) |
| 18 | Check if two strings are anagrams of each other | Easy | [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/) |
| 19 | Check if string matches wildcard pattern | Hard | [44. Wildcard Matching](https://leetcode.com/problems/wildcard-matching/) |
| 20 | Return maximum occurring character in the input string | Medium | [451. Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency/) (related) |
| 21 | Remove all duplicates from the input string | Easy | [1047. Remove All Adjacent Duplicates In String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/) |
| 22 | Print all duplicates in the string | — | N/A (fundamental frequency-map filtering, no direct LeetCode equivalent) |
| 23 | Find the largest word in the given string | Easy | [58. Length of Last Word](https://leetcode.com/problems/length-of-last-word/) (related, word-boundary scanning) |
| 24 | Sort the characters in the string | — | N/A (fundamental sorting utility, often used as an anagram-check helper) |
| 25 | Count the number of words in given string | Easy | [434. Number of Segments in a String](https://leetcode.com/problems/number-of-segments-in-a-string/) |
| 26 | Change case of each character in the string | — | N/A (fundamental ASCII case-toggling operation) |
| 27 | Find substring within a string, display position | Easy | [28. Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) |
| 28 | Reverse the string using two-pointer approach | Easy | [344. Reverse String](https://leetcode.com/problems/reverse-string/) |
| 29 | Generate all permutations of the string | Medium | [46. Permutations](https://leetcode.com/problems/permutations/) (related) |
| 30 | Check if string is a permutation of another | Medium | [567. Permutation in String](https://leetcode.com/problems/permutation-in-string/) |
| 31 | Implement brute-force first occurrence index of string matching | Easy | [28. Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) |

## Part B — Additional Practice Problems

Similar string problems worth practicing after finishing this folder, spanning Easy/Medium/Hard difficulty:

| # | Problem Statement | Difficulty | LeetCode Link |
|---|-------------------|------------|----------------|
| 32 | Longest palindromic substring | Medium | [5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) |
| 33 | Group strings that are anagrams of each other | Medium | [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/) |
| 34 | Compress a string using counts of repeated characters | Medium | [443. String Compression](https://leetcode.com/problems/string-compression/) |
| 35 | Validate balanced parentheses/brackets in an expression | Easy | [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) |
| 36 | Find the longest common prefix among an array of strings | Easy | [14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/) |
| 37 | Find the length of the longest substring without repeating characters | Medium | [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) |
| 38 | Find the minimum window substring containing all characters of another string | Hard | [76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) |
| 39 | Determine if a ransom note can be constructed from a magazine's letters | Easy | [383. Ransom Note](https://leetcode.com/problems/ransom-note/) |
| 40 | Check if two strings are isomorphic | Easy | [205. Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/) |
| 41 | Find the longest substring after replacing at most k characters | Medium | [424. Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) |

---

### 📊 Total LeetCode Questions: 41

*Breakdown: 31 problems mapped 1:1 to files in this folder (24 with a direct/related LeetCode link, 7 marked N/A as fundamental operations with no meaningful LeetCode equivalent) + 10 additional practice problems covering the same patterns (Sliding Window, Hashing/Frequency Map, Two Pointers, Stack, Backtracking, Dynamic Programming).*

*Note: String problems often focus on manipulation, frequency maps, and two-pointer techniques.*
