// 17. What are the balance binary search tree and its types avl and red-black

/**
 * Pattern Used: Self-Balancing Tree Taxonomy (Conceptual Model)
 * Why this pattern: Surveys the strategies (AVL's strict height balance via rotations, red-black's relaxed color-based balance) used to keep BST height at O(log n) and prevent the degenerate linked-list worst case.
 *
 * Interview Scenario:
 * "A frequently asked systems-flavored question: 'why would you pick a red-black tree over an AVL tree for a language's TreeMap/std::map implementation?' testing trade-off reasoning, not just code recall."
 *
 * Example:
 *   Input:  A skewed insertion order like [1,2,3,4,5] into a plain BST
 *   Output: Plain BST degenerates to a height-5 linked list; AVL/red-black rebalance to keep height ~O(log 5) = 3
 */
