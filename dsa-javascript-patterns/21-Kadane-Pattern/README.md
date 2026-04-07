 # Max Subarray Sum, Circular Subarray Sum, Product Subarray

## Kadane's Pattern

**Kadane's Algorithm** is a dynamic programming approach used to find the maximum sum of a contiguous subarray within a one-dimensional array of numbers. It is highly efficient, running in $O(n)$ time and using $O(1)$ space.

---

## **The Core Concept**

The fundamental idea behind Kadane's algorithm is to iterate through the array and at each element, decide whether to:
1.  **Extend** the current subarray by adding the current element.
2.  **Start** a new subarray beginning with the current element.

```javascript
currentSum = Math.max(num, currentSum + num);
maxSum = Math.max(maxSum, currentSum);
```

---

## **Types of Kadane-Based Problems**

| Scenario | How it Works | Example Problem |
| :--- | :--- | :--- |
| **Standard Maximum Subarray** | Find the maximum sum of a contiguous subarray. | [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) |
| **Circular Subarray Sum** | Handle arrays where the end wraps around to the beginning. | [Maximum Sum Circular Subarray](https://leetcode.com/problems/maximum-sum-circular-subarray/) |
| **Maximum Product Subarray** | Similar to sum, but tracks both max and min products to handle negative numbers. | [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) |
| **One Deletion Variant** | Find max sum where you can delete at most one element. | [Maximum Subarray Sum with One Deletion](https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/) |

---

## **🧠 How to Identify Kadane's Pattern?**

Look for these "triggers" in a question:

✅ **1. Contiguous Subarray**
- "Find the maximum/minimum sum of a **continuous** subarray."

✅ **2. Greedy / DP Choice**
- "At each point, should I continue the previous sequence or start fresh?"

✅ **3. Linear Time Requirement**
- Problems that need to be solved in $O(n)$ space or time.

---

## **🔥 Quick Mental Checklist**

When you see an array and need to find an optimal contiguous segment:
- ❓ Am I looking for a sum or product of a contiguous subarray?
- ❓ Can I make a local decision at each index to optimize the global result?
- ❓ Does a "reset" (starting a new subarray) help when the sum becomes negative?

👉 If **YES**, use **Kadane's Pattern**.
