// 2. Implement Stack Using Linked List

/**
 * Pattern Used: Stack - LIFO Simulation (Linked-List-Backed)
 * Why this pattern: Inserting/removing at the head of a singly linked list is
 * O(1) with no resizing or shifting involved, making it a natural backing
 * store for a stack that must grow and shrink without a fixed capacity.
 *
 * Interview Scenario:
 * "Follow-up to the array-based stack question: reimplement push, pop, peek
 * and isEmpty using a singly linked list where the head node represents the
 * top of the stack, and explain why this avoids the resize cost of a
 * dynamic array."
 *
 * Example:
 *   Input:  push(1), push(2), push(3), pop()
 *   Output: 3 removed, list head now points to node(2) -> node(1) -> null
 */
