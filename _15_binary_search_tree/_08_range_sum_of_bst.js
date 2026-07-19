// 8. Sum the Values of All BST Nodes Within a Given Range [low, high]

/**
 * Pattern Used: BST Pruned Traversal (Skip Subtrees Outside the Range)
 * Why this pattern: The BST ordering property lets you prune entire subtrees
 * that cannot contain values in [low, high] - skip the left child when the
 * current value is below low, skip the right child when it's above high -
 * avoiding a full O(n) visit of every node.
 *
 * Interview Scenario:
 * "Tests whether you'll just do a plain traversal or actually exploit the BST
 * structure to prune: given the root of a BST and a range [low, high], return
 * the sum of all node values that fall within that range."
 *
 * Example:
 *   Input:  root = [10,5,15,3,7,null,18], low = 7, high = 15
 *   Output: 32  (7 + 10 + 15)
 */
