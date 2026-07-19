// 2. What are the keys terminologies of the tree

/**
 * Pattern Used: Tree Terminology & Structural Definitions (Conceptual Model)
 * Why this pattern: Establishes the vocabulary (root, leaf, height, depth, ancestor, descendant, subtree, degree) that every later recursive/iterative tree algorithm in this folder relies on to reason about correctness.
 *
 * Interview Scenario:
 * "Asked as a warm-up in junior/new-grad interviews: 'define height vs depth, and what makes a node a leaf vs an internal node' - sloppy terminology here is a red flag before any coding even starts."
 *
 * Example:
 *   Input:          1
 *                 /   \
 *                2     3
 *               /
 *              4
 *   Output: root=1, leaf nodes={4,3}, height(1)=2, depth(4)=2, node 2 is an internal node with degree 1
 */
