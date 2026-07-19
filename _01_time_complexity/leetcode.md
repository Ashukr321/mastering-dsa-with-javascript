# LeetCode Equivalent Problems (Time Complexity)

*Note: Time Complexity is a conceptual topic rather than a single algorithm, so the
problems below aren't "time complexity problems" in themselves - they're classic
LeetCode questions chosen because solving them *well* (not just correctly) requires
explicitly reasoning about time/space complexity tradeoffs: brute force O(n^2) vs.
optimized O(n) or O(log n), when hashing trades space for time, and when a smarter
data structure or algorithm changes the complexity class entirely.*

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

---

### **📊 Total LeetCode Questions: 8**

*Note: These problems are chosen not for a shared algorithmic pattern but because each
one has a well-known naive solution and a well-known optimized solution occupying a
different complexity class - Two Sum's O(n^2) to O(n) jump via hashing, Two Sum II and
Median of Two Sorted Arrays showing how sorted-order structure unlocks O(log n)
behavior, and Trapping Rain Water showing the classic O(n) extra-space vs. O(1)
extra-space tradeoff. Being able to state *why* the optimized version is faster, not
just that it is, is exactly what interviewers probe for.*
