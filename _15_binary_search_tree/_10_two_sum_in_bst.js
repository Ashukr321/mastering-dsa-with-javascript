// 10. Determine if Two Nodes in a BST Sum to a Given Target

/**
 * Pattern Used: Two Pointer on Inorder Sequence (BST Iterator from Both Ends)
 * Why this pattern: Running two BST iterators - one producing values in
 * ascending order, one in descending order - lets you apply the classic
 * two-pointer technique on what is effectively a sorted sequence without
 * materializing the whole array, moving the low pointer up or the high
 * pointer down based on the current sum versus the target.
 *
 * Interview Scenario:
 * "A BST-flavored twist on the classic Two Sum: given the root of a BST and
 * an integer target, determine if there exist two distinct nodes whose values
 * sum to target, ideally without converting the whole tree into an array
 * first."
 *
 * Example:
 *   Input:  root = [5,3,6,2,4,null,7], target = 9
 *   Output: true  (5 + 4 = 9)
 */
