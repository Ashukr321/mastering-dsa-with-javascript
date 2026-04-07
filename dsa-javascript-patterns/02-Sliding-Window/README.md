 # Max Sum Subarray, Longest Substring, Smallest Subarray

## Sliding Window Pattern

The **Sliding Window** pattern is used to perform a required operation on a specific window size of a given array or linked list, such as finding the longest subarray containing all 1s. This approach reduces the time complexity from $O(n^2)$ to $O(n)$.

---

## **Types of Sliding Window Patterns**

| Scenario | How it Works | Example Problem |
| :--- | :--- | :--- |
| **Fixed Size Window** | Window size $K$ remains constant throughout. | [Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/) |
| **Variable Size Window (Longest)** | Window expands until a condition is met, then shrinks to find the max length. | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) |
| **Variable Size Window (Shortest)** | Window expands until a condition is met, then shrinks as much as possible to find the min length. | [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) |

---

## **🧠 How to Identify Sliding Window Problems?**

Look for these "triggers" in a question:

✅ **1. Contiguous Subarray/Substring**
- "Find the longest/shortest/maximum/minimum..."
- "Continuous elements in an array or string."

✅ **2. Target Sum or Property**
- "Subarray sum equals $K$."
- "At most $K$ unique characters."

✅ **3. Fixed Range Mentioned**
- "Check every window of size $K$."

---

## **🔥 Quick Mental Checklist**

When you see an array or string:
- ❓ Am I looking for a continuous range (subarray/substring)?
- ❓ Does the problem ask for an optimal length (longest/shortest)?
- ❓ Can I track the "state" of the window as I slide it (sum, frequency, unique elements)?

👉 If **YES**, use **Sliding Window**.
