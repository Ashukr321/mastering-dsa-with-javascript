// 6. Convert a BST into a Sorted Circular Doubly Linked List In-Place

/**
 * Pattern Used: BST Inorder Traversal Property (In-Place Pointer Rewiring)
 * Why this pattern: Performing an inorder traversal visits nodes in sorted
 * order, and by rewiring each node's left/right pointers to prev/next links
 * as you go (instead of allocating new nodes), the BST is transformed in
 * place into a sorted doubly linked list, finally closing it into a circle.
 *
 * Interview Scenario:
 * "A common 'flatten the tree' interview twist: given the root of a BST,
 * convert it in place into a sorted circular doubly linked list where left
 * acts as prev and right acts as next, without using extra node storage."
 *
 * Example:
 *   Input:  root = [4,2,5,1,3]
 *   Output: circular doubly linked list 1 <-> 2 <-> 3 <-> 4 <-> 5 <-> (back to 1)
 */
