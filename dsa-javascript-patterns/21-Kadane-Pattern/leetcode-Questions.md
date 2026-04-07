🧠 1. Standard Kadane's Algorithm
🟢 Easy
- [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) (Conceptually similar)
🟡 Medium
- [Maximum Subarray 🔥](https://leetcode.com/problems/maximum-array-sum/) (The core Kadane problem)

🌀 2. Circular & Variant Arrays
🟡 Medium
- [Maximum Sum Circular Subarray 🔥](https://leetcode.com/problems/maximum-sum-circular-subarray/)
- [Longest Turbulent Subarray](https://leetcode.com/problems/longest-turbulent-subarray/)
- [Maximum Subarray Sum with One Deletion](https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/)

✖️ 3. Product & Multiplication Variants
🟡 Medium
- [Maximum Product Subarray 🔥](https://leetcode.com/problems/maximum-product-subarray/)
- [Maximum Score from Performing Multiplication Operations](https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/)

🎯 MUST-DO LIST (If You Have Limited Time)

👉 Master these to understand the power of Kadane:

- [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) (Must know)
- [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
- [Maximum Sum Circular Subarray](https://leetcode.com/problems/maximum-sum-circular-subarray/)
- [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/)

⚡ Smart Practice Strategy

1. **The Core Logic**: At each step, decide: "Should I add the current element to the existing subarray, or start a new subarray from this element?"
   - `currentSum = Math.max(num, currentSum + num)`
2. **Global Maximum**: Always keep track of the best sum seen so far.
   - `maxSum = Math.max(maxSum, currentSum)`
3. **Handle All Negatives**: Standard Kadane might need initialization with the first element if the array can contain only negative numbers.
4. **Circular Arrays**: For circular problems, the max sum is either the standard max subarray OR (Total Sum - Minimum Subarray Sum).

---

### **📊 Total LeetCode Questions Solved by Pattern**

| Pattern Category | Total Questions |
| :--- | :---: |
| 🧠 1. Standard Kadane's | 2 |
| 🌀 2. Circular & Variants | 3 |
| ✖️ 3. Product Variants | 2 |
| **Total Questions** | **7** |
| 🎯 **Must-Do Problems** | **4** |
