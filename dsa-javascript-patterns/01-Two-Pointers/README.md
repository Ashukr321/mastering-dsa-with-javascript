 # Pair with Target Sum, Triplet Sum , Reverse string , linked list 

## Types of Two Pointer Patterns
| Pattern                                | How it works                                                          | Example Problem                                  |
| -------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------ |
| **Opposite ends**                      | One pointer at start, one at end                                      | Find if array has two numbers that sum to target |
| **Same direction / slow & fast**       | Both pointers move in same direction, usually one is fast, other slow | Remove duplicates, max consecutive 1s            |
| **Sliding window**                     | Expand or shrink window using two pointers                            | Longest substring without repeating characters   |
| **Partitioning / Dutch National Flag** | Move pointers to rearrange elements                                   | Sort colors problem                              |


## How to identity the two pointer problem :
🧠 How to Identify Two Pointer Problems?

Instead of memorizing, look for these signals (triggers) in a question:

✅ 1. Input is Sorted OR Can Be Sorted

👉 Biggest hint

If the problem says:

“sorted array”
or sorting won’t break logic

💡 Then think: Can I avoid nested loops using left & right?

Example trigger:

“Find two numbers whose sum = target”

🚀 Instantly think:

left = 0
right = n-1
move based on sum
✅ 2. You Need to Find a Pair / Triplet

If question says:

pair sum
triplet sum
closest sum

💡 Two pointer reduces complexity

Brute Force:

O(n²) or O(n³)

Optimized:

👉 Two pointer → O(n)

✅ 3. Range / Window / Subarray / Substring

If you see words like:

“longest”
“smallest”
“continuous”
“substring”
“subarray”

💡 Think:
👉 Sliding Window (which is a type of two pointer)

✅ 4. Opposite Ends Comparison

If problem involves:

checking palindrome
reversing
comparing elements from both sides

💡 Use:
👉 left++ and right--

✅ 5. In-place Modification Required

If question says:

“without extra space”
“modify array in-place”

💡 Use:
👉 slow & fast pointer

🔥 Quick Mental Checklist (Very Important)

When you read a question, ask:

❓ Is array sorted?
❓ Am I finding pairs/triplets?
❓ Is it continuous (subarray/substring)?
❓ Can I reduce nested loops?
❓ Can two indices help me track better?

👉 If YES to 2–3 of these → use Two Pointer