# LeetCode Master List

This file consolidates all LeetCode-equivalent problems across every topic folder in this repository. Each folder also has its own local `leetcode.md` with the same table plus a Difficulty column.

---

## **📊 Grand Total LeetCode Questions: 439**

---

## **1. Time Complexity** (8 problems) — [`_01_time_complexity/leetcode.md`](_01_time_complexity/leetcode.md)
| # | Problem Statement | Difficulty | LeetCode Link |
|---|-------------------|------------|----------------|
| 1 | Two Sum (brute-force O(n^2) vs. hash map O(n)) | Easy | [1. Two Sum](https://leetcode.com/problems/two-sum/) |
| 2 | Contains Duplicate (O(n^2) pairwise check vs. O(n) hash set) | Easy | [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) |
| 3 | Valid Anagram (O(n log n) sort vs. O(n) frequency count) | Easy | [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/) |
| 4 | Best Time to Buy and Sell Stock (O(n^2) brute force vs. O(n) single pass) | Easy | [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) |
| 5 | Two Sum II - Input Array Is Sorted (O(n) hash vs. O(log n)-per-lookup binary search / O(n) two pointers, O(1) space) | Medium | [167. Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) |
| 6 | Kth Largest Element in an Array (O(n log n) sort vs. O(n) quickselect / O(n log k) heap) | Medium | [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) |
| 7 | Median of Two Sorted Arrays (O(m+n) merge vs. O(log(min(m,n))) binary-search partition) | Hard | [4. Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) |
| 8 | Trapping Rain Water (O(n^2) brute force vs. O(n) two pointers / prefix-suffix arrays, O(1) vs O(n) space) | Hard | [42. Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) |

**Total Time Complexity: 8**

---

## **2. Mathematics** (18 problems) — [`_02_mathematics/leetcode.md`](_02_mathematics/leetcode.md)
| # | Problem Statement | Difficulty | LeetCode Link |
|---|-------------------|------------|---------------|
| 1 | Check Number Palindrome | Easy | [9. Palindrome Number](https://leetcode.com/problems/palindrome-number/) |
| 3 | Check Number is Prime | Medium | [204. Count Primes](https://leetcode.com/problems/count-primes/) (related) |
| 5 | Check Number is Armstrong | Easy | [1134. Armstrong Number](https://leetcode.com/problems/armstrong-number/) (Premium) |
| 6 | Check Number is Perfect | Easy | [507. Perfect Number](https://leetcode.com/problems/perfect-number/) |
| 15 | Reverse Digits of a Number | Medium | [7. Reverse Integer](https://leetcode.com/problems/reverse-integer/) |
| 17 | Power of a Number | Medium | [50. Pow(x, n)](https://leetcode.com/problems/powx-n/) |
| 21 | GCD of Two Numbers | Easy | [1979. Find Greatest Common Divisor of Array](https://leetcode.com/problems/find-greatest-common-divisor-of-array/) |
| 23 | Check Number is Harshad | Easy | [2520. Count the Digits That Divide a Number](https://leetcode.com/problems/count-the-digits-that-divide-a-number/) (related) |
| 24 | Sum of Digits of a Number | Easy | [258. Add Digits](https://leetcode.com/problems/add-digits/) |
| 25 | Add Two Fractions | Medium | [592. Fraction Addition and Subtraction](https://leetcode.com/problems/fraction-addition-and-subtraction/) |
| - | Happy Number | Easy | [202. Happy Number](https://leetcode.com/problems/happy-number/) |
| - | Ugly Number | Easy | [263. Ugly Number](https://leetcode.com/problems/ugly-number/) |
| - | Self Dividing Numbers | Easy | [728. Self Dividing Numbers](https://leetcode.com/problems/self-dividing-numbers/) |
| - | Perfect Squares | Medium | [279. Perfect Squares](https://leetcode.com/problems/perfect-squares/) |
| - | Water and Jug Problem | Medium | [365. Water and Jug Problem](https://leetcode.com/problems/water-and-jug-problem/) |
| - | Integer Break | Medium | [343. Integer Break](https://leetcode.com/problems/integer-break/) |
| - | Super Ugly Number | Medium | [313. Super Ugly Number](https://leetcode.com/problems/super-ugly-number/) |
| - | Basic Calculator | Hard | [224. Basic Calculator](https://leetcode.com/problems/basic-calculator/) |

**Total Mathematics: 18**

---

## **3. Bits Manipulation** (18 problems) — [`_03_bits_manipulation/leetcode.md`](_03_bits_manipulation/leetcode.md)
| # | Problem Statement | Difficulty | LeetCode Link |
|---|-------------------|------------|----------------|
| 1 | Number of 1 Bits (Count Set Bits) | Easy | [191. Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/) |
| 2 | Power of Two | Easy | [231. Power of Two](https://leetcode.com/problems/power-of-two/) |
| 3 | Single Number | Easy | [136. Single Number](https://leetcode.com/problems/single-number/) |
| 4 | Decode XORed Array (XOR Swap/Undo Trick) | Easy | [1720. Decode XORed Array](https://leetcode.com/problems/decode-xored-array/) |
| 5 | UTF-8 Validation (Positional Bit Checks) | Medium | [393. UTF-8 Validation](https://leetcode.com/problems/utf-8-validation/) |
| 6 | Minimum Flips to Make a OR b Equal to c (Set/Clear/Toggle Bits) | Medium | [1318. Minimum Flips to Make a OR b Equal to c](https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/) |
| 7 | Hamming Distance | Easy | [461. Hamming Distance](https://leetcode.com/problems/hamming-distance/) |
| 8 | Single Number III | Medium | [260. Single Number III](https://leetcode.com/problems/single-number-iii/) |
| 9 | Subsets | Medium | [78. Subsets](https://leetcode.com/problems/subsets/) |
| 10 | Divide Two Integers (Multiply/Divide via Bit Shift) | Medium | [29. Divide Two Integers](https://leetcode.com/problems/divide-two-integers/) |
| 11 | Reverse Bits | Easy | [190. Reverse Bits](https://leetcode.com/problems/reverse-bits/) |
| 12 | Missing Number | Easy | [268. Missing Number](https://leetcode.com/problems/missing-number/) |
| 13 | Counting Bits | Easy | [338. Counting Bits](https://leetcode.com/problems/counting-bits/) |
| 14 | Number Complement | Easy | [476. Number Complement](https://leetcode.com/problems/number-complement/) |
| 15 | Sum of Two Integers (Add Without +/-) | Medium | [371. Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers/) |
| 16 | Total Hamming Distance | Medium | [477. Total Hamming Distance](https://leetcode.com/problems/total-hamming-distance/) |
| 17 | Maximum XOR of Two Numbers in an Array | Medium | [421. Maximum XOR of Two Numbers in an Array](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/) |
| 18 | Bitwise AND of Numbers Range | Medium | [201. Bitwise AND of Numbers Range](https://leetcode.com/problems/bitwise-and-of-numbers-range/) |

**Total Bits Manipulation: 18**

---

## **4. Recursion** (24 problems) — [`_04_recursion/leetcode.md`](_04_recursion/leetcode.md)
| # | Problem Statement | Difficulty | LeetCode Link |
|---|-------------------|------------|---------------|
| 4 | Factorial using recursion | Easy | [172. Factorial Trailing Zeroes](https://leetcode.com/problems/factorial-trailing-zeroes/) (related — builds directly on the factorial recurrence) |
| 5 | Fibonacci series | Easy | [509. Fibonacci Number](https://leetcode.com/problems/fibonacci-number/) |
| 7 | Reverse string recursion | Easy | [344. Reverse String](https://leetcode.com/problems/reverse-string/) |
| 8 | Palindrome string check | Easy | [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) |
| 13 | Sum of digits | Easy | [258. Add Digits](https://leetcode.com/problems/add-digits/) (related) |
| 14 | Power of number | Medium | [50. Pow(x, n)](https://leetcode.com/problems/powx-n/) |
| 17 | Tower of Hanoi | Easy | [Hanota (LCCI) 面试题 08.06](https://leetcode.com/problems/hanota-lcci/) |
| 18 | Binary search recursion | Easy | [704. Binary Search](https://leetcode.com/problems/binary-search/) |
| 21 | Count array elements (recursive) | Easy | [1342. Number of Steps to Reduce a Number to Zero](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/) (related — same "shrink input by one each call" recursion shape) |
| 22 | String permutations | Medium | [46. Permutations](https://leetcode.com/problems/permutations/) (related) |
| 23 | Merge sort recursion | Medium | [912. Sort an Array](https://leetcode.com/problems/sort-an-array/) (related) |
| 24 | Decimal to binary recursion | Easy | [1404. Number of Steps to Reduce a Number in Binary Representation to One](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/) (related) |
| 25 | Calculate GCD | Easy | [1979. Find Greatest Common Divisor of Array](https://leetcode.com/problems/find-greatest-common-divisor-of-array/) (related) |
| 26 | Count digits of a number | Easy | [1342. Number of Steps to Reduce a Number to Zero](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/) (related) |
| 27 | Maximum element of array (recursive) | Easy | [1732. Find the Highest Altitude](https://leetcode.com/problems/find-the-highest-altitude/) (related running-max recursion) |
| 31 | Reverse a number using recursion | Easy | [7. Reverse Integer](https://leetcode.com/problems/reverse-integer/) |
| # | Problem Statement | Difficulty | LeetCode Link |
|---|-------------------|------------|---------------|
| P1 | Climbing Stairs (count ways using recursion + memo) | Easy | [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) |
| P2 | Merge Two Sorted Lists recursively | Easy | [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) |
| P3 | Maximum Depth of Binary Tree (recursive DFS) | Easy | [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) |
| P4 | Generate Parentheses (backtracking recursion) | Medium | [22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) |
| P5 | Subsets (recursive backtracking over choices) | Medium | [78. Subsets](https://leetcode.com/problems/subsets/) |
| P6 | Combination Sum (backtracking with reuse) | Medium | [39. Combination Sum](https://leetcode.com/problems/combination-sum/) |
| P7 | Merge k Sorted Lists (divide and conquer) | Hard | [23. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) |
| P8 | N-Queens (recursive backtracking with constraints) | Hard | [51. N-Queens](https://leetcode.com/problems/n-queens/) |

**Total Recursion: 24**

---

## **5. Arrays** (48 problems) — [`_05_array/leetcode.md`](_05_array/leetcode.md)
| # | Problem Statement | Difficulty | LeetCode Link |
|---|-------------------|------------|----------------|
| 1 | Sum of the Array element | Easy | [1480. Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/) (related) |
| 2 | Check array is sorted or not | Easy | [1752. Check if Array Is Sorted and Rotated](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/) (related) |
| 3 | Calculate frequency of array | Easy | [1636. Sort Array by Increasing Frequency](https://leetcode.com/problems/sort-array-by-increasing-frequency/) |
| 6 | Move zero to end in array | Easy | [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/) |
| 7 | Reverse the array | Easy | [344. Reverse String](https://leetcode.com/problems/reverse-string/) (related) |
| 8 | Rotate array | Medium | [189. Rotate Array](https://leetcode.com/problems/rotate-array/) |
| 10 | Find majority element in array | Easy | [169. Majority Element](https://leetcode.com/problems/majority-element/) |
| 11 | Find 2nd largest number in array | Easy | [414. Third Maximum Number](https://leetcode.com/problems/third-maximum-number/) (related) |
| 12 | Remove Duplicate from an array | Easy | [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) |
| 13 | Find intersection of two array | Easy | [349. Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/) |
| 15 | Kaden's algorithms | Medium | [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) |
| 16 | Dutch national algorithms | Medium | [75. Sort Colors](https://leetcode.com/problems/sort-colors/) |
| 17 | Check array is palindrome or not | Easy | [234. Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) (related) |
| 18 | Find missing number | Easy | [268. Missing Number](https://leetcode.com/problems/missing-number/) |
| 19 | Maximum sum subarray | Medium | [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) |
| 20 | Binary search iterative | Easy | [704. Binary Search](https://leetcode.com/problems/binary-search/) |
| 21 | Median of array | Hard | [4. Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) (related) |
| 22 | All repeating elements | Medium | [442. Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/) |
| 23 | Check array is subset of another array or not | Easy | [2215. Find the Difference of Two Arrays](https://leetcode.com/problems/find-the-difference-of-two-arrays/) (related) |
| 25 | Find the maximum frequency of array element | Medium | [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) (related) |
| 27 | Find missing number | Easy | [268. Missing Number](https://leetcode.com/problems/missing-number/) |
| 28 | Find first duplicate element in array | Medium | [287. Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/) |
| 29 | Generate all subarray and print the maximum sum subarray | Medium | [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) (related) |
| 30 | Move all negative to one side of the array | Easy | [905. Sort Array By Parity](https://leetcode.com/problems/sort-array-by-parity/) (related) |
| 31 | Find the factorial of large number | Medium | [43. Multiply Strings](https://leetcode.com/problems/multiply-strings/) (related) |
| 32 | Subarray sum exists | Medium | [560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) |
| 33 | Left rotate array by 1 place | Medium | [189. Rotate Array](https://leetcode.com/problems/rotate-array/) (related) |
| 34 | Search in 2d matrix | Medium | [74. Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) |
| 35 | Print matrix in spiral manner | Medium | [54. Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) |
| 36 | Sort 0 1 and 2 | Medium | [75. Sort Colors](https://leetcode.com/problems/sort-colors/) |
| 37 | Intersection II | Easy | [350. Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/) |
| 38 | Rotate the array left by 1 position | Medium | [189. Rotate Array](https://leetcode.com/problems/rotate-array/) (related) |
| 39 | Rotate array right by 1 position | Medium | [189. Rotate Array](https://leetcode.com/problems/rotate-array/) (related) |
| 40 | Rotate array left by kth position | Medium | [189. Rotate Array](https://leetcode.com/problems/rotate-array/) (related) |
| 41 | Check array is subset of another array using map (frequency) | Easy | [350. Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/) (related) |
| 42 | Move negative number one side in array | Easy | [905. Sort Array By Parity](https://leetcode.com/problems/sort-array-by-parity/) (related) |
| 43 | Generate permutations | Medium | [46. Permutations](https://leetcode.com/problems/permutations/) |
| 44 | Pair with target sum | Easy | [1. Two Sum](https://leetcode.com/problems/two-sum/) |
| P1 | Extra practice: Best time to buy and sell a stock for max profit | Easy | [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) |
| P2 | Extra practice: Merge two sorted arrays in-place | Easy | [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/) |
| P3 | Extra practice: Find all numbers disappeared in an array (1..n) | Easy | [448. Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/) |
| P4 | Extra practice: Product of array except self (no division) | Medium | [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) |
| P5 | Extra practice: Find all unique triplets that sum to zero | Medium | [15. 3Sum](https://leetcode.com/problems/3sum/) |
| P6 | Extra practice: Longest run of consecutive numbers in an unsorted array | Medium | [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) |
| P7 | Extra practice: Merge overlapping intervals | Medium | [56. Merge Intervals](https://leetcode.com/problems/merge-intervals/) |
| P8 | Extra practice: Binary search in a rotated sorted array | Medium | [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) |
| P9 | Extra practice: Find the smallest missing positive integer in O(n) | Hard | [41. First Missing Positive](https://leetcode.com/problems/first-missing-positive/) |
| P10 | Extra practice: Maximum of every sliding window of size k | Hard | [239. Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) |

**Total Arrays: 48**

---

## **6. Searching** (18 problems) — [`_06_searching/leetcode.md`](_06_searching/leetcode.md)
| # | Problem Statement | Difficulty | LeetCode Link |
|---|-------------------|------------|----------------|
| 1 | Binary Search | Easy | [704. Binary Search](https://leetcode.com/problems/binary-search/) |
| 2 | Search in Rotated Sorted Array | Medium | [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) |
| 3 | Search in a 2D Matrix | Medium | [74. Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) |
| 4 | Find First and Last Position | Medium | [34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) |
| 5 | Search Insert Position | Easy | [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/) |
| 6 | Peak Index in a Mountain Array | Medium | [852. Peak Index in a Mountain Array](https://leetcode.com/problems/peak-index-in-a-mountain-array/) |
| 7 | Find Minimum in Rotated Sorted Array | Medium | [153. Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) |
| 8 | First Bad Version | Easy | [278. First Bad Version](https://leetcode.com/problems/first-bad-version/) |
| 9 | Sqrt(x) | Easy | [69. Sqrt(x)](https://leetcode.com/problems/sqrtx/) |
| 10 | Guess Number Higher or Lower | Easy | [374. Guess Number Higher or Lower](https://leetcode.com/problems/guess-number-higher-or-lower/) |
| 11 | Find Peak Element | Medium | [162. Find Peak Element](https://leetcode.com/problems/find-peak-element/) |
| 12 | Search in Rotated Sorted Array II (with duplicates) | Medium | [81. Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/) |
| 13 | Find Minimum in Rotated Sorted Array II (with duplicates) | Hard | [154. Find Minimum in Rotated Sorted Array II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/) |
| 14 | Median of Two Sorted Arrays | Hard | [4. Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) |
| 15 | Search a 2D Matrix II | Medium | [240. Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/) |
| 16 | Koko Eating Bananas (binary search on answer) | Medium | [875. Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) |
| 17 | Find Smallest Letter Greater Than Target | Easy | [744. Find Smallest Letter Greater Than Target](https://leetcode.com/problems/find-smallest-letter-greater-than-target/) |
| 18 | Find K Closest Elements | Medium | [658. Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements/) |

**Total Searching: 18**

---

## **7. Sorting** (17 problems) — [`_07_sorting/leetcode.md`](_07_sorting/leetcode.md)
| # | Problem Statement | Difficulty | LeetCode Link |
|---|-------------------|------------|----------------|
| 1 | Sort an Array (General) | Medium | [912. Sort an Array](https://leetcode.com/problems/sort-an-array/) |
| 2 | Sort Colors (Dutch National Flag) | Medium | [75. Sort Colors](https://leetcode.com/problems/sort-colors/) |
| 3 | Insertion Sort List | Medium | [147. Insertion Sort List](https://leetcode.com/problems/insertion-sort-list/) |
| 4 | Sort List (Merge Sort) | Medium | [148. Sort List](https://leetcode.com/problems/sort-list/) |
| 5 | Kth Largest Element | Medium | [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) |
| 6 | Maximum Gap (Radix/Bucket) | Medium | [164. Maximum Gap](https://leetcode.com/problems/maximum-gap/) |
| 7 | Largest Number (Custom Sort) | Medium | [179. Largest Number](https://leetcode.com/problems/largest-number/) |
| 8 | Merge Intervals | Medium | [56. Merge Intervals](https://leetcode.com/problems/merge-intervals/) |
| 9 | H-Index | Medium | [274. H-Index](https://leetcode.com/problems/h-index/) |
| 10 | Squares of a Sorted Array | Easy | [977. Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/) |
| 11 | Relative Sort Array | Easy | [1122. Relative Sort Array](https://leetcode.com/problems/relative-sort-array/) |
| 12 | Sort Characters By Frequency | Medium | [451. Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency/) |
| 13 | Wiggle Sort II | Medium | [324. Wiggle Sort II](https://leetcode.com/problems/wiggle-sort-ii/) |
| 14 | Meeting Rooms II | Medium | [253. Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/) |
| 15 | Top K Frequent Elements | Medium | [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) |
| 16 | Merge k Sorted Lists | Hard | [23. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) |
| 17 | Count of Smaller Numbers After Self | Hard | [315. Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/) |

**Total Sorting: 17**

---

## **8. Matrix** (16 problems) — [`_08_matrix/leetcode.md`](_08_matrix/leetcode.md)
| # | Problem Statement | Difficulty | LeetCode Link |
|---|-------------------|------------|----------------|
| 1 | Rotate a square matrix by 90 degrees in-place | Medium | [48. Rotate Image](https://leetcode.com/problems/rotate-image/) |
| 2 | Transpose of a matrix | Easy | [867. Transpose Matrix](https://leetcode.com/problems/transpose-matrix/) |
| 3 | Set matrix zeroes | Medium | [73. Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/) |
| 4 | Check if matrix is symmetric | Easy | [867. Transpose Matrix](https://leetcode.com/problems/transpose-matrix/) (related) |
| 5 | Sum of all diagonal elements | Easy | [1572. Matrix Diagonal Sum](https://leetcode.com/problems/matrix-diagonal-sum/) |
| 6 | Number of islands (DFS/BFS on grid) | Medium | [200. Number of Islands](https://leetcode.com/problems/number-of-islands/) |
| 7 | Flood fill algorithm | Easy | [733. Flood Fill](https://leetcode.com/problems/flood-fill/) |
| 8 | Word search in a grid (backtracking) | Medium | [79. Word Search](https://leetcode.com/problems/word-search/) |
| 9 | Unique paths in a grid (DP) | Medium | [62. Unique Paths](https://leetcode.com/problems/unique-paths/) |
| 10 | Maximal square of 1s in a binary matrix (DP) | Medium | [221. Maximal Square](https://leetcode.com/problems/maximal-square/) |
| P1 | Extra practice: Generate a spiral-filled matrix from 1 to n^2 | Medium | [59. Spiral Matrix II](https://leetcode.com/problems/spiral-matrix-ii/) |
| P2 | Extra practice: Search a sorted-per-row-and-column matrix efficiently | Medium | [240. Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/) |
| P3 | Extra practice: Simulate Conway's Game of Life on a board in-place | Medium | [289. Game of Life](https://leetcode.com/problems/game-of-life/) |
| P4 | Extra practice: Traverse a matrix in diagonal zig-zag order | Medium | [498. Diagonal Traverse](https://leetcode.com/problems/diagonal-traverse/) |
| P5 | Extra practice: Rotate a matrix's layers by k steps | Medium | [1914. Cyclically Rotate a Matrix](https://leetcode.com/problems/cyclically-rotate-a-matrix/) |
| P6 | Extra practice: Check if every diagonal has the same value (Toeplitz Matrix) | Easy | [766. Toeplitz Matrix](https://leetcode.com/problems/toeplitz-matrix/) |

**Total Matrix: 16**

---

## **9. Hashing** (17 problems) — [`_09_hashing/leetcode.md`](_09_hashing/leetcode.md)
| # | Problem Statement | Difficulty | LeetCode Link |
|---|-------------------|------------|----------------|
| 1 | Two Sum | Easy | [1. Two Sum](https://leetcode.com/problems/two-sum/) |
| 2 | Check If Duplicate Exists In An Array | Easy | [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) |
| 3 | Count Frequency Of Elements | Easy | [1512. Number of Good Pairs](https://leetcode.com/problems/number-of-good-pairs/) |
| 4 | Check Anagram Using HashMap | Easy | [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/) |
| 5 | First Non-Repeating Element | Easy | [387. First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/) |
| 6 | Find Pairs With Given Sum | Medium | [1679. Max Number of K-Sum Pairs](https://leetcode.com/problems/max-number-of-k-sum-pairs/) |
| 7 | Isomorphic Strings | Easy | [205. Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/) |
| 8 | Group Anagrams | Medium | [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/) |
| 9 | Longest Substring Without Repeating Characters | Medium | [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) |
| 10 | Top K Frequent Elements | Medium | [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) |
| 11 | Subarray Sum Equals K | Medium | [560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) |
| 12 | Longest Consecutive Sequence | Medium | [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) |
| 13 | Ransom Note | Easy | [383. Ransom Note](https://leetcode.com/problems/ransom-note/) |
| 14 | Word Pattern | Easy | [290. Word Pattern](https://leetcode.com/problems/word-pattern/) |
| 15 | Longest Palindrome (Character Frequency) | Easy | [409. Longest Palindrome](https://leetcode.com/problems/longest-palindrome/) |
| 16 | Find All Duplicates in an Array | Medium | [442. Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/) |
| 17 | Valid Sudoku (Row/Column/Box Hash Sets) | Medium | [36. Valid Sudoku](https://leetcode.com/problems/valid-sudoku/) |

**Total Hashing: 17**

---

## **10. String** (41 problems) — [`_10_string/leetcode.md`](_10_string/leetcode.md)
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

**Total String: 41**

---

## **11. Linked List** (38 problems) — [`_11_linkedlist/leetcode.md`](_11_linkedlist/leetcode.md)
| # | Problem Statement | Difficulty | LeetCode Link |
|---|--------------------|------------|----------------|
| 1 | Insert the node at begin of the singly linked list | Medium | [707. Design Linked List](https://leetcode.com/problems/design-linked-list/) |
| 2 | Insert the node at end of the singly linked list | Medium | [707. Design Linked List](https://leetcode.com/problems/design-linked-list/) |
| 3 | Insert the node at given position in the singly linked list | Medium | [707. Design Linked List](https://leetcode.com/problems/design-linked-list/) |
| 4 | Delete the node at begin of the singly linked list | Medium | [707. Design Linked List](https://leetcode.com/problems/design-linked-list/) |
| 5 | Delete the node at end of the singly linked list | Medium | [707. Design Linked List](https://leetcode.com/problems/design-linked-list/) |
| 6 | Delete the node at given position in the singly linked list | Medium | [707. Design Linked List](https://leetcode.com/problems/design-linked-list/) |
| 11 | Print the sum of all the node data | Easy | [1290. Convert Binary Number in a Linked List to Integer](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/) |
| 12 | Find the midNode | Easy | [876. Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/) |
| 13 | Insert the node at begin of the doubly linked list | Medium | [146. LRU Cache](https://leetcode.com/problems/lru-cache/) |
| 14 | Insert the node at end of the doubly linked list | Medium | [146. LRU Cache](https://leetcode.com/problems/lru-cache/) |
| 15 | Insert the node at given position in the doubly linked list | Medium | [146. LRU Cache](https://leetcode.com/problems/lru-cache/) |
| 16 | Delete the node at begin of the doubly linked list | Medium | [146. LRU Cache](https://leetcode.com/problems/lru-cache/) |
| 17 | Delete the node at end of the doubly linked list | Medium | [146. LRU Cache](https://leetcode.com/problems/lru-cache/) |
| 18 | Delete the node at given position in the doubly linked list | Medium | [146. LRU Cache](https://leetcode.com/problems/lru-cache/) |
| 22 | Insert at begin in singly circular linked list | Medium | [708. Insert into a Sorted Circular Linked List](https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/) |
| 23 | Insert the node at end of the singly circular linked list | Medium | [708. Insert into a Sorted Circular Linked List](https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/) |
| 24 | Insert the node at given position in the singly circular linked list | Medium | [708. Insert into a Sorted Circular Linked List](https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/) |
| 31 | Insert the node at begin of the doubly circular linked list | Medium | [641. Design Circular Deque](https://leetcode.com/problems/design-circular-deque/) |
| 32 | Insert the node at end of the doubly circular linked list | Medium | [641. Design Circular Deque](https://leetcode.com/problems/design-circular-deque/) |
| 33 | Insert the node at given position in the doubly circular linked list | Medium | [641. Design Circular Deque](https://leetcode.com/problems/design-circular-deque/) |
| 34 | Delete the node at begin of the doubly circular linked list | Medium | [641. Design Circular Deque](https://leetcode.com/problems/design-circular-deque/) |
| 35 | Delete the node at end of the doubly circular linked list | Medium | [641. Design Circular Deque](https://leetcode.com/problems/design-circular-deque/) |
| 36 | Delete the node at given position in the doubly circular linked list | Medium | [641. Design Circular Deque](https://leetcode.com/problems/design-circular-deque/) |
| 40 | Detect the loop | Easy | [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) |
| 42 | Reverse the linked list | Easy | [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) |
| 43 | Merge two sorted linked list | Easy | [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) |
| 44 | Check linked list is palindrome | Easy | [234. Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) |
| 45 | Delete the loop | Medium | [142. Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/) (related) |
| 46 | Remove duplicate in sorted list | Easy | [83. Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/) |
| 47 | Intersection of two sorted list | Easy | [160. Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/) (related) |
| # | Problem Statement | Difficulty | LeetCode Link |
|---|--------------------|------------|----------------|
| - | Delete Node in a Linked List (given only access to the node, no head) | Easy | [237. Delete Node in a Linked List](https://leetcode.com/problems/delete-node-in-a-linked-list/) |
| - | Remove the N-th node from the end of a list in one pass | Medium | [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) |
| - | Add two numbers represented as linked lists (digit by digit, with carry) | Medium | [2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/) |
| - | Swap every two adjacent nodes in a linked list | Medium | [24. Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/) |
| - | Reorder a list into first, last, second, second-last, ... order | Medium | [143. Reorder List](https://leetcode.com/problems/reorder-list/) |
| - | Deep-copy a linked list where each node also has a random pointer | Medium | [138. Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) |
| - | Flatten a multilevel doubly linked list into a single-level list | Medium | [430. Flatten a Multilevel Doubly Linked List](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/) |
| - | Merge k sorted linked lists into one sorted list | Hard | [23. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) |

**Total Linked List: 38**

---

## **12. Stack** (20 problems) — [`_12_stack/leetcode.md`](_12_stack/leetcode.md)
| # | Problem Statement | Difficulty | LeetCode Link |
|---|-------------------|------------|----------------|
| 1 | Implement stack using array | Easy | [Design a Stack (GfG concept - no direct LeetCode ID)](https://leetcode.com/problems/design-a-stack-with-increment-operation/) |
| 2 | Implement stack using linked list | Medium | [707. Design Linked List](https://leetcode.com/problems/design-linked-list/) |
| 3 | Check balanced parentheses | Easy | [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) (single-type variant) |
| 4 | Reverse a stack using recursion | Medium | [Reverse a Stack (GfG)](https://www.geeksforgeeks.org/reverse-a-stack-using-recursion/) |
| 5 | Sort a stack using recursion | Medium | [Sort a Stack (GfG)](https://www.geeksforgeeks.org/sort-a-stack-using-recursion/) |
| 6 | Next greater element (monotonic stack) | Easy | [496. Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/) |
| 7 | Min stack - get minimum in O(1) | Medium | [155. Min Stack](https://leetcode.com/problems/min-stack/) |
| 8 | Evaluate postfix expression | Medium | [150. Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/) |
| 9 | Infix to postfix conversion | Medium | [Infix to Postfix (GfG)](https://www.geeksforgeeks.org/stack-set-2-infix-to-postfix/) |
| 10 | Implement queue using two stacks | Easy | [232. Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/) |
| 11 | Largest rectangle in histogram (monotonic stack) | Hard | [84. Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) |
| 12 | Valid parentheses with multiple bracket types | Easy | [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) |
| 13 | Celebrity problem using stack | Medium | [Find the Celebrity (LintCode 645 / GfG)](https://www.geeksforgeeks.org/the-celebrity-problem/) |
| 14 | Trapping rain water using stack | Hard | [42. Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) |
| 15 | Remove all adjacent duplicates in a string | Easy | [1047. Remove All Adjacent Duplicates In String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/) |
| 16 | Simplify a Unix-style absolute file path | Medium | [71. Simplify Path](https://leetcode.com/problems/simplify-path/) |
| 17 | Decode a run-length encoded string | Medium | [394. Decode String](https://leetcode.com/problems/decode-string/) |
| 18 | Find daily temperatures needing a warmer day (monotonic stack) | Medium | [739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) |
| 19 | Basic calculator supporting +, -, and parentheses | Hard | [224. Basic Calculator](https://leetcode.com/problems/basic-calculator/) |
| 20 | Online stock span (monotonic stack) | Medium | [901. Online Stock Span](https://leetcode.com/problems/online-stock-span/) |

**Total Stack: 20**

---

## **13. Queue** (18 problems) — [`_13_queue/leetcode.md`](_13_queue/leetcode.md)
| # | Problem Statement | Difficulty | LeetCode Link |
|---|--------------------|------------|----------------|
| 1 | Implement Queue using Array | Easy | [933. Number of Recent Calls](https://leetcode.com/problems/number-of-recent-calls/) |
| 2 | Implement Queue using Linked List | Easy | [1700. Number of Students Unable to Eat Lunch](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/) (related) |
| 3 | Circular Queue Implementation | Medium | [622. Design Circular Queue](https://leetcode.com/problems/design-circular-queue/) |
| 4 | Implement Queue using Two Stacks | Easy | [232. Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/) |
| 5 | Implement Stack using Two Queues | Easy | [225. Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/) |
| 6 | Generate Binary Numbers 1 to N using Queue | Medium | [22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) (related - BFS/queue level-by-level generation) |
| 7 | Check Queue Empty or Full | Medium | [622. Design Circular Queue](https://leetcode.com/problems/design-circular-queue/) (related - isEmpty/isFull sub-operations) |
| 8 | Priority Queue Concept | Easy | [1046. Last Stone Weight](https://leetcode.com/problems/last-stone-weight/) |
| 9 | Sliding Window Maximum using Deque | Hard | [239. Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) |
| 10 | First Non-Repeating Character in a Stream using Queue | Medium | [387. First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/) (related - streaming variant) |
| 11 | Reverse First K Elements of a Queue | Medium | [232. Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/) (related - stack-assisted reversal) |
| 12 | Circular Tour / Gas Station using Queue Logic | Medium | [134. Gas Station](https://leetcode.com/problems/gas-station/) |
| # | Problem Statement | Difficulty | LeetCode Link |
|---|--------------------|------------|----------------|
| - | Compute a moving average over the last k values in a data stream using a queue | Easy | [346. Moving Average from Data Stream](https://leetcode.com/problems/moving-average-from-data-stream/) |
| - | Design a deque supporting insert/remove at both the front and the middle/back | Medium | [1670. Design Front Middle Back Queue](https://leetcode.com/problems/design-front-middle-back-queue/) |
| - | Simulate two opposing queues (senators) voting/banning each other in rounds | Medium | [649. Dota2 Senate](https://leetcode.com/problems/dota2-senate/) |
| - | Reveal cards from a deck in increasing order by simulating a queue of indices | Medium | [950. Reveal Cards In Increasing Order](https://leetcode.com/problems/reveal-cards-in-increasing-order/) |
| - | Find the shortest subarray with a sum of at least K using a monotonic deque of prefix sums | Hard | [862. Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/) |
| - | Maximize a constrained subsequence sum using a monotonic deque sliding window | Hard | [1425. Constrained Subsequence Sum](https://leetcode.com/problems/constrained-subsequence-sum/) |

**Total Queue: 18**

---

## **14. Tree** (23 problems) — [`_14_tree/leetcode.md`](_14_tree/leetcode.md)
| # | Problem Statement | Difficulty | LeetCode Link |
|---|-------------------|------------|----------------|
| 3 | Binary Tree Traversal (In/Pre/Post) | Easy | [94. Inorder](https://leetcode.com/problems/binary-tree-inorder-traversal/), [144. Preorder](https://leetcode.com/problems/binary-tree-preorder-traversal/), [145. Postorder](https://leetcode.com/problems/binary-tree-postorder-traversal/) |
| 6 | Size of Binary Tree (Count Nodes) | Medium | [222. Count Complete Tree Nodes](https://leetcode.com/problems/count-complete-tree-nodes/) |
| 11 | Insert into a Binary Search Tree | Medium | [701. Insert into a Binary Search Tree](https://leetcode.com/problems/insert-into-a-binary-search-tree/) |
| 12 | Search in a Binary Search Tree | Easy | [700. Search in a Binary Search Tree](https://leetcode.com/problems/search-in-a-binary-search-tree/) |
| 13 | Find Min Node (BST leftmost descent, used in deletion) | Medium | [450. Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/) |
| 15 | Validate Binary Search Tree | Medium | [98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) |
| 17 | Balanced BST Types (AVL / Red-Black) | Easy | [110. Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/) |
| 18 | AVL Tree Implementation (Rotations) | Medium | [1382. Balance a Binary Search Tree](https://leetcode.com/problems/balance-a-binary-search-tree/) |
| 21 | Implement Trie (Prefix Tree) | Medium | [208. Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/) |
| 22 | Segment Tree Applications (Range Queries) | Medium | [307. Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/) |
| 25 | Maximum Depth of Binary Tree | Easy | [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) |
| 25 | Minimum Depth of Binary Tree | Easy | [111. Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/) |
| 26 | Binary Tree Level Order Traversal | Medium | [102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) |
| 27 | Binary Tree Level Order Traversal II | Medium | [107. Binary Tree Level Order Traversal II](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/) |
| 28 | Diameter of Binary Tree | Easy | [543. Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) |
| # | Problem Statement | Difficulty | LeetCode Link |
|---|-------------------|------------|----------------|
| A1 | Invert Binary Tree | Easy | [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) |
| A2 | Same Tree | Easy | [100. Same Tree](https://leetcode.com/problems/same-tree/) |
| A3 | Symmetric Tree | Easy | [101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/) |
| A4 | Path Sum | Easy | [112. Path Sum](https://leetcode.com/problems/path-sum/) |
| A5 | Lowest Common Ancestor of a Binary Search Tree | Medium | [235. Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) |
| A6 | Lowest Common Ancestor of a Binary Tree | Medium | [236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) |
| A7 | Construct Binary Tree from Preorder and Inorder Traversal | Medium | [105. Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) |
| A8 | Serialize and Deserialize Binary Tree | Hard | [297. Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) |

**Total Tree: 23**

---

## **15. Binary Search Tree** (15 problems) — [`_15_binary_search_tree/leetcode.md`](_15_binary_search_tree/leetcode.md)
| # | Problem Statement | Difficulty | LeetCode Link |
|---|-------------------|------------|----------------|
| 1 | Kth Smallest Element in a BST | Medium | [230. Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) |
| 2 | Convert Sorted Array to Binary Search Tree | Easy | [108. Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/) |
| 3 | Lowest Common Ancestor of a Binary Search Tree | Medium | [235. Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) |
| 4 | Binary Search Tree Iterator | Medium | [173. Binary Search Tree Iterator](https://leetcode.com/problems/binary-search-tree-iterator/) |
| 5 | Delete Node in a BST | Medium | [450. Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/) |
| 6 | Convert Binary Search Tree to Sorted Doubly Linked List | Medium | [426. Convert Binary Search Tree to Sorted Doubly Linked List](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/) |
| 7 | Recover Binary Search Tree | Medium | [99. Recover Binary Search Tree](https://leetcode.com/problems/recover-binary-search-tree/) |
| 8 | Range Sum of BST | Easy | [938. Range Sum of BST](https://leetcode.com/problems/range-sum-of-bst/) |
| 9 | Closest Binary Search Tree Value | Easy | [270. Closest Binary Search Tree Value](https://leetcode.com/problems/closest-binary-search-tree-value/) |
| 10 | Two Sum IV - Input is a BST | Easy | [653. Two Sum IV - Input is a BST](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/) |
| # | Problem Statement | Difficulty | LeetCode Link |
|---|-------------------|------------|----------------|
| A1 | Trim a Binary Search Tree | Medium | [669. Trim a Binary Search Tree](https://leetcode.com/problems/trim-a-binary-search-tree/) |
| A2 | Minimum Absolute Difference in BST | Easy | [530. Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst/) |
| A3 | Construct Binary Search Tree from Preorder Traversal | Medium | [1008. Construct Binary Search Tree from Preorder Traversal](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/) |
| A4 | Unique Binary Search Trees | Medium | [96. Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees/) |
| A5 | Find Mode in Binary Search Tree | Easy | [501. Find Mode in Binary Search Tree](https://leetcode.com/problems/find-mode-in-binary-search-tree/) |

**Total Binary Search Tree: 15**

---

## **16. Heap** (16 problems) — [`_16_heap/leetcode.md`](_16_heap/leetcode.md)
| # | Problem Statement | Difficulty | LeetCode Link |
|---|-------------------|------------|----------------|
| 1 | Implement a Min-Heap from scratch (array-based) | Basic | [GfG: Implement a Maxheap/MinHeap using arrays](https://www.geeksforgeeks.org/problems/implement-a-maxheapmin-heap-using-arrays/1) |
| 2 | Implement a Max-Heap from scratch (array-based) | Basic | [GfG: Implement a Maxheap/MinHeap using arrays](https://www.geeksforgeeks.org/problems/implement-a-maxheapmin-heap-using-arrays/1) |
| 3 | Heapify an Array (Build Heap in O(n)) | Basic | [GfG: Building Heap from Array](https://www.geeksforgeeks.org/problems/building-heap-from-array/1) |
| 4 | Kth Largest Element in an Array | Medium | [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) |
| 5 | Kth Largest Element in a Stream | Easy | [703. Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/) |
| 6 | Top K Frequent Elements | Medium | [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) |
| 7 | Merge k Sorted Lists | Hard | [23. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) |
| 8 | Find Median from Data Stream | Hard | [295. Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) |
| 9 | Sort Characters By Frequency | Medium | [451. Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency/) |
| 10 | Task Scheduler | Medium | [621. Task Scheduler](https://leetcode.com/problems/task-scheduler/) |
| 11 | Minimum Cost to Connect Ropes/Sticks | Easy | [1167. Minimum Cost to Connect Sticks](https://leetcode.com/problems/minimum-cost-to-connect-sticks/) *(Premium — free equivalent:* [GfG: Minimum Cost of ropes](https://www.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/1)*)* |
| 12 | Last Stone Weight | Easy | [1046. Last Stone Weight](https://leetcode.com/problems/last-stone-weight/) |
| 13 | Reorganize String | Medium | [767. Reorganize String](https://leetcode.com/problems/reorganize-string/) |
| 14 | Kth Smallest Element in a Sorted Matrix | Medium | [378. Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) |
| 15 | Top K Frequent Words | Medium | [692. Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/) |
| 16 | Smallest Range Covering Elements from K Lists | Hard | [632. Smallest Range Covering Elements from K Lists](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/) |

**Total Heap: 16**

---

## **17. Graph** (20 problems) — [`_17_graph/leetcode.md`](_17_graph/leetcode.md)
| # | Problem Statement | Difficulty | LeetCode Link |
|---|-------------------|------------|----------------|
| 1 | Graph Representation (Adjacency List / Matrix) | Easy | [1971. Find if Path Exists in Graph](https://leetcode.com/problems/find-if-path-exists-in-graph/) |
| 2 | BFS Traversal (Breadth-First Search) | Medium | [994. Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) |
| 3 | DFS Traversal (Depth-First Search) | Medium | [200. Number of Islands](https://leetcode.com/problems/number-of-islands/) |
| 4 | Detect Cycle in an Undirected Graph | Medium | [684. Redundant Connection](https://leetcode.com/problems/redundant-connection/) |
| 5 | Detect Cycle in a Directed Graph | Medium | [802. Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/) |
| 6 | Topological Sort (Kahn's Algorithm / DFS-Based) | Medium | [210. Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) |
| 7 | Number of Connected Components (Union-Find) | Medium | [547. Number of Provinces](https://leetcode.com/problems/number-of-provinces/) |
| 8 | Course Schedule (Prerequisite Ordering) | Medium | [207. Course Schedule](https://leetcode.com/problems/course-schedule/) |
| 9 | Dijkstra's Shortest Path Algorithm | Medium | [743. Network Delay Time](https://leetcode.com/problems/network-delay-time/) |
| 10 | Bellman-Ford Algorithm (Negative Weights) | Medium | [787. Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) |
| 11 | Kruskal's Minimum Spanning Tree | Medium | [1584. Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/) |
| 12 | Prim's Minimum Spanning Tree | Medium | [1584. Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/) |
| 13 | Clone a Graph | Medium | [133. Clone Graph](https://leetcode.com/problems/clone-graph/) |
| 14 | Bipartite Graph Check | Medium | [785. Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/) |
| 15 | Number of Operations to Make Network Connected (Union-Find) | Medium | [1319. Number of Operations to Make Network Connected](https://leetcode.com/problems/number-of-operations-to-make-network-connected/) |
| 16 | Satisfiability of Equality Equations (Union-Find) | Medium | [990. Satisfiability of Equality Equations](https://leetcode.com/problems/satisfiability-of-equality-equations/) |
| 17 | Word Ladder (BFS Shortest Transformation) | Hard | [127. Word Ladder](https://leetcode.com/problems/word-ladder/) |
| 18 | Pacific Atlantic Water Flow (Multi-Source DFS/BFS) | Medium | [417. Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/) |
| 19 | Maximal Network Rank (Degree Counting on Graph) | Medium | [1615. Maximal Network Rank](https://leetcode.com/problems/maximal-network-rank/) |
| 20 | Shortest Path with Alternating Colors (BFS on Multigraph) | Medium | [1129. Shortest Path with Alternating Colors](https://leetcode.com/problems/shortest-path-with-alternating-colors/) |

**Total Graph: 20**

---

## **18. Greedy** (15 problems) — [`_18_greedy/leetcode.md`](_18_greedy/leetcode.md)
| # | Problem Statement | Difficulty | LeetCode Link |
|---|-------------------|------------|----------------|
| 1 | Activity Selection Problem | Hard | [1353. Maximum Number of Events That Can Be Attended](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/) |
| 2 | Fractional Knapsack Problem | Easy | [1710. Maximum Units on a Truck](https://leetcode.com/problems/maximum-units-on-a-truck/) |
| 3 | Job Sequencing With Deadlines | Medium | [621. Task Scheduler](https://leetcode.com/problems/task-scheduler/) |
| 4 | Minimum Number of Platforms Needed | Medium | [253. Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/) |
| 5 | Gas Station Circular Tour | Medium | [134. Gas Station](https://leetcode.com/problems/gas-station/) |
| 6 | Jump Game (Reachability) | Medium | [55. Jump Game](https://leetcode.com/problems/jump-game/) |
| 7 | Candy Distribution Problem | Hard | [135. Candy](https://leetcode.com/problems/candy/) |
| 8 | Non-overlapping Intervals Removal | Medium | [435. Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) |
| 9 | Assign Cookies Problem | Easy | [455. Assign Cookies](https://leetcode.com/problems/assign-cookies/) |
| 10 | Minimum Number of Coins for a Given Amount | Medium | [322. Coin Change](https://leetcode.com/problems/coin-change/) |
| 11 | Partition Labels | Medium | [763. Partition Labels](https://leetcode.com/problems/partition-labels/) |
| 12 | Minimum Number of Arrows to Burst Balloons | Medium | [452. Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) |
| 13 | Boats to Save People | Medium | [881. Boats to Save People](https://leetcode.com/problems/boats-to-save-people/) |
| 14 | Best Time to Buy and Sell Stock II | Medium | [122. Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) |
| 15 | Two City Scheduling | Medium | [1029. Two City Scheduling](https://leetcode.com/problems/two-city-scheduling/) |

**Total Greedy: 15**

---

## **19. Backtracking** (16 problems) — [`_19_backtracking/leetcode.md`](_19_backtracking/leetcode.md)
| # | Problem Statement | Difficulty | LeetCode Link |
|---|-------------------|------------|----------------|
| 1 | N-Queens | Hard | [51. N-Queens](https://leetcode.com/problems/n-queens/) |
| 2 | Sudoku Solver | Hard | [37. Sudoku Solver](https://leetcode.com/problems/sudoku-solver/) |
| 3 | Subsets | Medium | [78. Subsets](https://leetcode.com/problems/subsets/) |
| 4 | Permutations | Medium | [46. Permutations](https://leetcode.com/problems/permutations/) |
| 5 | Combination Sum | Medium | [39. Combination Sum](https://leetcode.com/problems/combination-sum/) |
| 6 | Rat in a Maze (all paths) | Medium | [Rat in a Maze](https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1) |
| 7 | Word Search | Medium | [79. Word Search](https://leetcode.com/problems/word-search/) |
| 8 | Palindrome Partitioning | Medium | [131. Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/) |
| 9 | Generate Parentheses | Medium | [22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) |
| 10 | Letter Combinations of a Phone Number | Medium | [17. Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) |
| 11 | N-Queens II (count solutions) | Hard | [52. N-Queens II](https://leetcode.com/problems/n-queens-ii/) |
| 12 | Subsets II (with duplicates) | Medium | [90. Subsets II](https://leetcode.com/problems/subsets-ii/) |
| 13 | Permutations II (with duplicates) | Medium | [47. Permutations II](https://leetcode.com/problems/permutations-ii/) |
| 14 | Combination Sum II (each number used once) | Medium | [40. Combination Sum II](https://leetcode.com/problems/combination-sum-ii/) |
| 15 | Combinations | Medium | [77. Combinations](https://leetcode.com/problems/combinations/) |
| 16 | Restore IP Addresses | Medium | [93. Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/) |

**Total Backtracking: 16**

---

## **20. Dynamic Programming** (20 problems) — [`_20_dynamic_programming/leetcode.md`](_20_dynamic_programming/leetcode.md)
| # | Problem Statement | Difficulty | LeetCode Link |
|---|-------------------|------------|----------------|
| 1 | Fibonacci Number Using Memoization | Easy | [509. Fibonacci Number](https://leetcode.com/problems/fibonacci-number/) |
| 2 | Climbing Stairs | Easy | [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) |
| 3 | 0/1 Knapsack Problem | Medium | [494. Target Sum](https://leetcode.com/problems/target-sum/) (related) |
| 4 | Subset Sum Problem | Medium | [416. Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) (related) |
| 5 | Longest Common Subsequence | Medium | [1143. Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) |
| 6 | Longest Increasing Subsequence | Medium | [300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) |
| 7 | Edit Distance | Medium | [72. Edit Distance](https://leetcode.com/problems/edit-distance/) |
| 8 | Coin Change (Minimum Coins) | Medium | [322. Coin Change](https://leetcode.com/problems/coin-change/) |
| 9 | House Robber | Medium | [198. House Robber](https://leetcode.com/problems/house-robber/) |
| 10 | Partition Equal Subset Sum | Medium | [416. Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) |
| 11 | Matrix Chain Multiplication | Hard | [1039. Minimum Score Triangulation of Polygon](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/) (related) |
| 12 | Longest Palindromic Subsequence | Medium | [516. Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/) |
| 13 | Word Break Problem | Medium | [139. Word Break](https://leetcode.com/problems/word-break/) |
| 14 | Maximum Product Subarray | Medium | [152. Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) |
| P1 | Extra practice: Minimum path sum in a grid moving only right or down | Medium | [64. Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/) |
| P2 | Extra practice: Count unique paths in a grid moving only right or down | Medium | [62. Unique Paths](https://leetcode.com/problems/unique-paths/) |
| P3 | Extra practice: Longest palindromic substring (contiguous) | Medium | [5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) |
| P4 | Extra practice: Decode ways for a digit string | Medium | [91. Decode Ways](https://leetcode.com/problems/decode-ways/) |
| P5 | Extra practice: Best time to buy and sell stock with cooldown | Medium | [309. Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/) |
| P6 | Extra practice: Count distinct ways to form a target string from a source string's subsequences | Hard | [115. Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/) |

**Total Dynamic Programming: 20**

---

## **21. Trie** (13 problems) — [`_21_trie/leetcode.md`](_21_trie/leetcode.md)
| # | Problem Statement | Difficulty | LeetCode Link |
|---|-------------------|------------|----------------|
| 1 | Implement Trie (insert / search / startsWith) from scratch | Medium | [208. Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/) |
| 2 | Word Search II (find multiple words in a grid using trie + backtracking) | Hard | [212. Word Search II](https://leetcode.com/problems/word-search-ii/) |
| 3 | Design Add and Search Words Data Structure (with wildcard '.') | Medium | [211. Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/) |
| 4 | Longest Word in Dictionary built from other words | Easy | [720. Longest Word in Dictionary](https://leetcode.com/problems/longest-word-in-dictionary/) |
| 5 | Replace Words with shortest dictionary root | Medium | [648. Replace Words](https://leetcode.com/problems/replace-words/) |
| 6 | Maximum XOR of Two Numbers in an Array using a binary trie | Medium | [421. Maximum XOR of Two Numbers in an Array](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/) |
| 7 | Design Search Autocomplete System | Hard | [642. Design Search Autocomplete System](https://leetcode.com/problems/design-search-autocomplete-system/) |
| 8 | Count Distinct Substrings of a string using a trie | Hard | [1698. Number of Distinct Substrings in a String](https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/) |
| 9 | Map Sum Pairs (prefix-based sum queries over key/value pairs) | Medium | [677. Map Sum Pairs](https://leetcode.com/problems/map-sum-pairs/) |
| 10 | Palindrome Pairs (trie-optimized pair search) | Hard | [336. Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/) |
| 11 | Short Encoding of Words (trie built from reversed words) | Medium | [820. Short Encoding of Words](https://leetcode.com/problems/short-encoding-of-words/) |
| 12 | Stream of Characters (trie built from reversed words, queried per stream char) | Hard | [1032. Stream of Characters](https://leetcode.com/problems/stream-of-characters/) |
| 13 | Concatenated Words (trie/DP to find words made of other words) | Hard | [472. Concatenated Words](https://leetcode.com/problems/concatenated-words/) |

**Total Trie: 13**

---
