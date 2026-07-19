// 1. Insert the node at the begin of the singly linked list
/**
 * Pattern Used: In-place Pointer Rewiring
 * Why this pattern: Inserting at the head only requires pointing the new node's next at the current head and moving the head reference to the new node — an O(1) operation with no traversal needed.
 *
 * Interview Scenario:
 * "A warm-up question at almost every product-based company (Amazon, Flipkart) to check if a candidate understands that a linked list's head insert is O(1), unlike an array's unshift which is O(n) due to shifting."
 *
 * Example:
 *   Input:  list: 2 -> 3 -> null, insertAtBegin(1)
 *   Output: 1 -> 2 -> 3 -> null
 */
