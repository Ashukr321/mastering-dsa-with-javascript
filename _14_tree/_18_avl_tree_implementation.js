// 18. What are the avl tree and its operation implement

/**
 * Pattern Used: Self-Balancing Tree Rotation (AVL)
 * Why this pattern: After every insert/delete, computes each node's balance factor (height(left) - height(right)) and applies left/right/left-right/right-left rotations whenever it exceeds +-1 to restore O(log n) height.
 *
 * Interview Scenario:
 * "A harder onsite/senior-level question ('implement AVL insert with rotations') used to see if candidates can track balance factors and pick the correct rotation case under pressure."
 *
 * Example:
 *   Input:  Insert order [10, 20, 30] into an empty AVL tree
 *   Output: Left-left case detected at root 10 -> left rotation applied -> balanced tree with 20 as root, 10 and 30 as children
 */
