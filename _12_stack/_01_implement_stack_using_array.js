// 1. Implement Stack Using Array

/**
 * Pattern Used: Stack - LIFO Simulation (Array-Backed)
 * Why this pattern: An array's push/pop already operate on its last element in
 * O(1) amortized time, so it is the simplest concrete backing store for a
 * Last-In-First-Out abstract data type.
 *
 * Interview Scenario:
 * "Foundational question interviewers use to check you understand the stack
 * ADT before its applications: build a Stack class backed by an array
 * exposing push, pop, peek, isEmpty and size, and discuss the O(1) vs O(n)
 * trade-offs versus a linked-list-backed version."
 *
 * Example:
 *   Input:  push(10), push(20), push(30), pop()
 *   Output: 30 removed, stack now [10, 20], peek() => 20
 */
