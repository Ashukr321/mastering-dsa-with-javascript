// 5. Delete a Node with a Given Key from a BST

/**
 * Pattern Used: Recursive BST Search-and-Splice (Inorder Successor Replacement)
 * Why this pattern: Finding the node recursively via BST comparisons, then
 * replacing a two-child node's value with its inorder successor (the min of
 * the right subtree) before deleting that successor, keeps the BST property
 * intact while handling all three deletion cases (leaf, one child, two
 * children).
 *
 * Interview Scenario:
 * "A step up from basic BST insert/search: given the root of a BST and a key,
 * delete the node with that key and return the new root, making sure the tree
 * remains a valid BST afterward."
 *
 * Example:
 *   Input:  root = [5,3,6,2,4,null,7], key = 3
 *   Output: [5,4,6,2,null,null,7]  (one valid resulting BST)
 */
