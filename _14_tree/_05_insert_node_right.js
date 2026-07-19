// 5. Insert the node at the right of the tree

/**
 * Pattern Used: Recursive Tree Construction (Manual Node Linking)
 * Why this pattern: Mirrors left-insertion but wires the new node onto the right pointer, reinforcing that binary tree shape is fully controlled by explicit left/right references rather than any ordering rule.
 *
 * Interview Scenario:
 * "Common lead-in exercise before BST questions, used to confirm a candidate can manipulate raw node references without accidentally overwriting existing subtrees."
 *
 * Example:
 *   Input:  root = {val: 1, left: null, right: null}; insertRight(root, 3)
 *   Output: root = {val: 1, left: null, right: {val: 3, left: null, right: null}}
 */
