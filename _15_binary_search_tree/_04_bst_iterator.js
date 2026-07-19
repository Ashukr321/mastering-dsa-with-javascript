// 4. Design an Iterator Over a BST That Returns Values in Ascending Order

/**
 * Pattern Used: BST Iterator Pattern (Controlled Inorder Traversal via Explicit Stack)
 * Why this pattern: Simulating the recursive inorder traversal with an
 * explicit stack lets the traversal be paused and resumed on demand, so
 * next() and hasNext() each run in average O(1) instead of materializing the
 * entire sorted sequence up front.
 *
 * Interview Scenario:
 * "Asked to design a class BSTIterator that behaves like a database cursor
 * over a BST: implement next() and hasNext() so values come out in ascending
 * order using O(h) memory instead of flattening the whole tree first."
 *
 * Example:
 *   Input:  BSTIterator it = new BSTIterator([7,3,15,null,null,9,20]);
 *           it.next(); it.next(); it.hasNext(); it.next(); it.hasNext()
 *   Output: 3, 7, true, 9, true
 */
