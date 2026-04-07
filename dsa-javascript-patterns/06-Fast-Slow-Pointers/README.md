 # LinkedList Cycle, Happy Number, Middle of the Linked List

## Fast and Slow Pointer (Tortoise and Hare) Pattern

The Fast and Slow pointer approach, also known as **Floyd's Cycle-Finding Algorithm**, is a pointer algorithm that uses two pointers which move through the sequence at different speeds.

### **How it works:**
- **Slow Pointer**: Moves one step at a time.
- **Fast Pointer**: Moves two steps at a time.
- **Cycle Detection**: If there is a cycle, the fast pointer will eventually catch up to the slow pointer (they will meet). If the fast pointer reaches the end of the list, there is no cycle.

---

## **Types of Fast and Slow Pointer Problems**

| Scenario | Application | Example Problem |
| :--- | :--- | :--- |
| **Cycle Detection** | Find if a Linked List or Array has a cycle. | [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) |
| **Finding Middle** | Find the middle node of a Linked List. | [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/) |
| **Finding Cycle Start** | Find the exact node where the cycle starts. | [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/) |
| **Happy Number** | Determine if a number eventually leads to 1. | [Happy Number](https://leetcode.com/problems/happy-number/) |
| **Palindrome Detection** | Check if a Linked List is a palindrome. | [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) |

---

## **🧠 How to Identify Fast and Slow Pointer Problems?**

Look for these "triggers" in a question:

✅ **1. Cyclic Nature**
- "Check if there is a loop/cycle."
- "The sequence might repeat."

✅ **2. Middle Element Needed**
- "Find the middle of a Linked List."
- "Partition the list into two halves."

✅ **3. Kth Element from End**
- "Find the nth node from the end." (Fast pointer moves $k$ steps ahead first).

✅ **4. In-place Manipulation**
- "Rearrange the list without extra space."

---

## **🔥 Quick Mental Checklist**

When you see a Linked List or a sequence:
- ❓ Does it have a cycle?
- ❓ Do I need to find the middle?
- ❓ Am I restricted from using extra space (O(1) space)?

👉 If **YES**, use **Fast and Slow Pointers**.
