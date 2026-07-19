# Mastering DSA with JavaScript

A numbered, topic-by-topic DSA practice repo. Every folder is prefixed `_NN_` so the recommended learning order is visible directly in the file tree. Each topic folder contains numbered problem files (`_01_...js`, `_02_...js`, ...) annotated with the design pattern used + a realistic interview scenario, plus its own `leetcode.md` (Difficulty column: Easy/Medium/Hard) mapping problems to real LeetCode equivalents. The root [`leetcode.md`](leetcode.md) aggregates every topic's table into one master list with a grand total.

## Topics (in learning order)

- [Time Complexity](_01_time_complexity)
- [Mathematics](_02_mathematics)
- [Bits Manipulation](_03_bits_manipulation)
- [Recursion](_04_recursion)
- [Arrays](_05_array)
- [Searching](_06_searching)
- [Sorting](_07_sorting)
- [Matrix](_08_matrix)
- [Hashing](_09_hashing)
- [String](_10_string)
- [Linked List](_11_linkedlist)
- [Stack](_12_stack)
- [Queue](_13_queue)
- [Tree](_14_tree)
- [Binary Search Tree](_15_binary_search_tree)
- [Heap](_16_heap)
- [Graph](_17_graph)
- [Greedy](_18_greedy)
- [Backtracking](_19_backtracking)
- [Dynamic Programming](_20_dynamic_programming)
- [Trie](_21_trie)

There's also a separate [`dsa-javascript-patterns/`](dsa-javascript-patterns) folder with a pattern-first (rather than topic-first) breakdown, useful for interview-pattern-recognition practice. The table below links each pattern to the topic folder(s) where you'll actually find matching problems.

## Pattern ↔ Topic Folder Mapping

| # | Pattern (`dsa-javascript-patterns/`) | Related Topic Folder(s) | Typical Problems |
|---|---------------------------------------|--------------------------|-------------------|
| 1 | [01-Two-Pointers](dsa-javascript-patterns/01-Two-Pointers) | [Arrays](_05_array), [String](_10_string) | Pair with target sum, palindrome check, reverse in-place |
| 2 | [02-Sliding-Window](dsa-javascript-patterns/02-Sliding-Window) | [Arrays](_05_array), [String](_10_string), [Hashing](_09_hashing) | Max sum subarray, longest substring without repeats |
| 3 | [03-Prefix-Sum](dsa-javascript-patterns/03-Prefix-Sum) | [Arrays](_05_array), [Hashing](_09_hashing) | Subarray sum equals K, pivot index |
| 4 | [04-Hash-Maps](dsa-javascript-patterns/04-Hash-Maps) | [Hashing](_09_hashing) | First non-repeating char, group anagrams, two sum |
| 5 | [05-Stack](dsa-javascript-patterns/05-Stack) | [Stack](_12_stack) | Valid parentheses, next greater element, min stack |
| 6 | [06-Fast-Slow-Pointers](dsa-javascript-patterns/06-Fast-Slow-Pointers) | [Linked List](_11_linkedlist) | Cycle detection, middle of linked list, happy number |
| 7 | [07-Cyclic-Sort](dsa-javascript-patterns/07-Cyclic-Sort) | [Arrays](_05_array) | Missing number, find the duplicate number |
| 8 | [08-Merge-Intervals](dsa-javascript-patterns/08-Merge-Intervals) | [Sorting](_07_sorting), [Greedy](_18_greedy) | Merge intervals, meeting rooms II, insert interval |
| 9 | [09-In-place-Reversal-LinkedList](dsa-javascript-patterns/09-In-place-Reversal-LinkedList) | [Linked List](_11_linkedlist) | Reverse linked list, reverse in sub-list/pairs |
| 10 | [10-Binary-Search](dsa-javascript-patterns/10-Binary-Search) | [Searching](_06_searching), [Binary Search Tree](_15_binary_search_tree) | Koko eating bananas, search in rotated array, kth smallest in BST |
| 11 | [11-BFS-DFS-Graphs](dsa-javascript-patterns/11-BFS-DFS-Graphs) | [Graph](_17_graph), [Tree](_14_tree) | Number of provinces, path exists, level order traversal |
| 12 | [12-Island-Matrix-Traversal](dsa-javascript-patterns/12-Island-Matrix-Traversal) | [Matrix](_08_matrix) | Number of islands, flood fill, word search |
| 13 | [13-Topological-Sort-Graph](dsa-javascript-patterns/13-Topological-Sort-Graph) | [Graph](_17_graph) | Course schedule, alien dictionary |
| 14 | [14-Union-Find](dsa-javascript-patterns/14-Union-Find) | [Graph](_17_graph) | Redundant connection, number of connected components |
| 15 | [15-Two-Heaps](dsa-javascript-patterns/15-Two-Heaps) | [Heap](_16_heap) | Median of a number stream, IPO |
| 16 | [16-Top-K-Elements](dsa-javascript-patterns/16-Top-K-Elements) | [Heap](_16_heap) | Top K frequent elements, K closest points to origin |
| 17 | [17-K-way-Merge](dsa-javascript-patterns/17-K-way-Merge) | [Heap](_16_heap), [Sorting](_07_sorting) | Merge K sorted lists, smallest range covering K lists |
| 18 | [18-Subsets](dsa-javascript-patterns/18-Subsets) | [Backtracking](_19_backtracking) | Subsets, permutations, letter combinations |
| 19 | [19-Backtracking](dsa-javascript-patterns/19-Backtracking) | [Backtracking](_19_backtracking) | Combination sum, N-Queens, Sudoku solver |
| 20 | [20-Greedy-Algorithms](dsa-javascript-patterns/20-Greedy-Algorithms) | [Greedy](_18_greedy) | Valid palindrome II, gas station, jump game |
| 21 | [21-Kadane-Pattern](dsa-javascript-patterns/21-Kadane-Pattern) | [Arrays](_05_array) | Maximum subarray, max product subarray |
| 22 | [22-Bitwise-XOR](dsa-javascript-patterns/22-Bitwise-XOR) | [Bits Manipulation](_03_bits_manipulation) | Single number, missing number via XOR |
| 23 | [23-Trie](dsa-javascript-patterns/23-Trie) | [Trie](_21_trie), [Tree](_14_tree) | Implement Trie, word search II, search suggestions |
| 24 | [24-0-1-Knapsack-DP](dsa-javascript-patterns/24-0-1-Knapsack-DP) | [Dynamic Programming](_20_dynamic_programming) | Subset sum, partition equal subset sum |
| 25 | [25-Sorting-Searching-Basics](dsa-javascript-patterns/25-Sorting-Searching-Basics) | [Sorting](_07_sorting), [Searching](_06_searching) | Quick/merge sort, linear/binary search |
| 26 | [26-searching](dsa-javascript-patterns/26-searching) | [Searching](_06_searching) | Core search algorithm drills |

---


