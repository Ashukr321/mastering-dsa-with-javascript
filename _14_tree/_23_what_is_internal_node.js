// 23. What is the internal nodes in the tree ?

/**
 * Pattern Used: Tree Node Classification (Internal vs Leaf Nodes)
 * Why this pattern: Defines internal nodes as any node with at least one child, as opposed to leaf nodes with none - a classification that later traversal-based questions (like printing only internal nodes) depend on.
 *
 * Interview Scenario:
 * "A quick definitional check interviewers use before asking a filtering traversal question, to make sure the candidate won't confuse 'internal' with 'root'."
 *
 * Example:
 *   Input:      1
 *              / \
 *             2   3
 *            /
 *           4
 *   Output: Internal nodes = {1, 2}; leaf nodes = {4, 3}
 */
