// 30. Update the node at the given position in singly circular linked list
/**
 * Pattern Used: Iterative Traversal
 * Why this pattern: Walking node-by-node for the given index (bounded so it doesn't wrap forever) locates the target node whose data is then mutated directly, with no pointer changes.
 *
 * Interview Scenario:
 * "A minor variant checking that candidates bound their loop correctly using a counter rather than relying on a null check that will never trigger."
 *
 * Example:
 *   Input:  circular list: 1 -> 2 -> 3 -> (back to 1), updateAtPosition(9, index=1)
 *   Output: circular list: 1 -> 9 -> 3 -> (back to 1)
 */
