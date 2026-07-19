// 4. Insert the node at left of the tree

/**
 * Pattern Used: Recursive Tree Construction (Manual Node Linking)
 * Why this pattern: Builds a tree by directly wiring a new node onto an existing node's left pointer, the foundational operation every higher-level insert (BST, AVL) is eventually built on top of.
 *
 * Interview Scenario:
 * "Used to test whether a candidate understands that a 'tree' in JS is just linked objects with left/right references, before they attempt BST insert or balancing logic."
 *
 * Example:
 *   Input:  root = {val: 1, left: null, right: null}; insertLeft(root, 2)
 *   Output: root = {val: 1, left: {val: 2, left: null, right: null}, right: null}
 */
